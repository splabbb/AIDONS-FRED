import { useEffect, useRef } from 'react';

export function MondrianBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId: number;

    const GRID_ROWS = 4;
    const GRID_COLS = 5;

    let rowRatios: number[] = [];
    let colRatios: number[] = [];
    let rowPhases: number[] = [];
    let colPhases: number[] = [];

    function initGrid() {
      rowRatios = [];
      colRatios = [];
      rowPhases = [];
      colPhases = [];

      for (let i = 1; i < GRID_ROWS; i++) {
        rowRatios.push(
          i / GRID_ROWS + (Math.random() - 0.5) * 0.12
        );
        rowPhases.push(Math.random() * Math.PI * 2);
      }

      for (let i = 1; i < GRID_COLS; i++) {
        colRatios.push(
          i / GRID_COLS + (Math.random() - 0.5) * 0.12
        );
        colPhases.push(Math.random() * Math.PI * 2);
      }
    }

    function resize() {
      if (!container || !canvas || !ctx) return;
      
      dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      if (!rowRatios.length) {
        initGrid();
      }
    }

    function animate(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const rows = rowRatios.map((ratio, i) => {
        const drift =
          Math.sin(time * 0.0002 + rowPhases[i]) * 0.025;
        return (ratio + drift) * height;
      });

      const cols = colRatios.map((ratio, i) => {
        const drift =
          Math.cos(time * 0.0002 + colPhases[i]) * 0.025;
        return (ratio + drift) * width;
      });

      // 1. Draw subtle geometric accent block (Soft muted background block)
      ctx.fillStyle = 'rgba(218, 41, 28, 0.025)'; // Extremely light red fill for one cell
      const blockX = cols[0] || 0;
      const blockY = rows[1] || 0;
      const blockW = (cols[1] || width) - blockX;
      const blockH = (rows[2] || height) - blockY;
      ctx.fillRect(blockX, blockY, blockW, blockH);

      // 2. Draw crisp horizontal and vertical red grid lines
      ctx.lineWidth = 1;

      // Draw horizontal lines
      rows.forEach((y, i) => {
        ctx.beginPath();
        ctx.strokeStyle = (i % 2 === 0) 
          ? 'rgba(218, 41, 28, 0.35)'  // Precision crimson line
          : 'rgba(200, 200, 205, 0.25)'; // Architectural pale gray line
        
        ctx.moveTo(0, Math.round(y) + 0.5); // Pixel-snap for sharpness
        ctx.lineTo(width, Math.round(y) + 0.5);
        ctx.stroke();
      });

      // Draw vertical lines
      cols.forEach((x, j) => {
        ctx.beginPath();
        ctx.strokeStyle = (j % 2 !== 0) 
          ? 'rgba(218, 41, 28, 0.35)' 
          : 'rgba(200, 200, 205, 0.25)';

        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, height);
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    }

    function start() {
      resize();
      animationId = requestAnimationFrame(animate);
    }

    function stop() {
      cancelAnimationFrame(animationId);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);

    start();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      resizeObserver.disconnect();
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-[#fbfcfe] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
