import { Component, ElementRef, afterNextRender, inject } from '@angular/core';

@Component({
  selector: 'app-globe',
  standalone: true,
  templateUrl: './globe.html',
  styleUrl: './globe.css',
})
export class Globe {
  private readonly el = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      this.initGlobe();
    });
  }

  private initGlobe(): void {
    const canvas = this.el.nativeElement.querySelector('#globe-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const numPoints = 120;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const points: { x: number; y: number; z: number; lon: number; lat: number }[] = [];

    // Generate points distributed on a sphere (Fibonacci sphere)
    for (let i = 0; i < numPoints; i++) {
      const lat = Math.asin(2 * (i / numPoints) - 1);
      const lon = (2 * Math.PI * i) / goldenRatio;
      points.push({
        x: Math.cos(lat) * Math.cos(lon),
        y: Math.cos(lat) * Math.sin(lon),
        z: Math.sin(lat),
        lon,
        lat,
      });
    }

    let time = 0;

    const animate = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, rect.width, rect.height);

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const radius = Math.min(380, Math.max(130, Math.min(rect.width, rect.height) * 0.48));

      // Atmosphere glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.6);
      gradient.addColorStop(0, 'rgba(78, 201, 160, 0.12)');
      gradient.addColorStop(0.5, 'rgba(122, 162, 247, 0.08)');
      gradient.addColorStop(1, 'rgba(240, 169, 62, 0.04)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Draw latitude circles
      ctx.strokeStyle = 'rgba(240, 169, 62, 0.12)';
      ctx.lineWidth = 0.8;
      for (let i = 1; i < 6; i++) {
        const ringRadius = (radius * i) / 6;
        ctx.beginPath();
        ctx.ellipse(cx, cy, ringRadius, ringRadius * 0.4, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          radius,
          radius * 0.3,
          angle,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      // Rotate points
      const cosT = Math.cos(time * 0.0004);
      const sinT = Math.sin(time * 0.0004);

      // Project and draw points
      const projected: { x: number; y: number; depth: number }[] = [];
      for (const p of points) {
        // Rotate around Y axis
        const x1 = p.x * cosT - p.z * sinT;
        const z1 = p.x * sinT + p.z * cosT;
        // Rotate around X axis (slowly)
        const x2 = x1;
        const y2 = p.y * 0.999 - z1 * 0.04 + (p.y * 0.04); // subtle X rotation
        const z2 = p.y * 0.04 + z1 * 0.999;

        const depth = z2;
        const scale = (radius + depth * radius) / (2 * radius);
        const sx = cx + (x2 * radius * scale) * 0.85;
        const sy = cy + (y2 * radius * scale) * 0.85;

        projected.push({ x: sx, y: sy, depth: depth * radius });
      }

      // Draw connections between nearby visible points
      ctx.strokeStyle = 'rgba(122, 162, 247, 0.15)';
      ctx.lineWidth = 0.7;
      for (let i = 0; i < projected.length; i++) {
        if (projected[i].depth < -radius * 0.3) continue; // back face culling
        for (let j = i + 1; j < projected.length; j++) {
          if (projected[j].depth < -radius * 0.3) continue;
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 45) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      for (const p of projected) {
        if (p.depth < -radius * 0.3) continue;
        const size = (p.depth + radius) / (2 * radius) * 2.8 + 0.8;
        const alpha = (p.depth + radius) / (2 * radius) * 0.5 + 0.3;

        // Active points (near viewer)
        if (p.depth > radius * 0.4) {
          ctx.fillStyle = 'rgba(240, 169, 62, 0.9)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();

          // Glow
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
          glow.addColorStop(0, 'rgba(240, 169, 62, 0.4)');
          glow.addColorStop(1, 'rgba(240, 169, 62, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(78, 201, 160, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw globe outline
      ctx.strokeStyle = 'rgba(240, 169, 62, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius, radius * 0.35, 0, 0, Math.PI * 2);
      ctx.stroke();

      time += 16;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}