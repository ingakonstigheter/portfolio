"use client";
import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawAmbient();
    };

    const drawAmbient = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Array of soft, faint colors (blues, greens, purples, pinks)
      const colors = [
        "rgba(96, 165, 250, 0.08)", // soft blue
        "rgba(52, 211, 153, 0.08)", // soft green
        "rgba(168, 85, 247, 0.06)", // soft purple
        "rgba(236, 72, 153, 0.06)", // soft pink
        "rgba(59, 130, 246, 0.07)", // deeper blue
      ];

      // Generate 5-8 random blobs
      const blobCount = 5 + Math.floor(Math.random() * 4);

      for (let i = 0; i < blobCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 150 + Math.random() * 300; // 150-450px radius
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Draw a radial gradient blob for softer appearance
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      }
    };

    resizeCanvas();

    // Redraw on window resize
    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
