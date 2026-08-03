import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function InteractiveDots() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseTimeout;

    const dpr = window.devicePixelRatio || 1;
    let width, height;

    const dots = [];
    const spacing = 18; 

    const initDots = () => {
      dots.length = 0;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          dots.push({ x, y, baseX: x, baseY: y });
        }
      }
    };

    const resize = () => {
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      initDots();
    };

    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e) => {
      // Safety check to ensure canvas still exists
      if (!canvasRef.current) return; 
      
      const rect = canvasRef.current.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.x = -1000;
        mouse.y = -1000;
      }, 150); 
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      clearTimeout(mouseTimeout);
    };

    window.addEventListener('resize', resize);
    
    // UPDATED: Listen to the whole window so elements on top don't block the mouse!
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    resize(); 

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const dotColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(13, 75, 210, 0.35)';

      dots.forEach(dot => {
        let dx = mouse.x - dot.x;
        let dy = mouse.y - dot.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          const targetX = dot.x - Math.cos(angle) * force * 22; 
          const targetY = dot.y - Math.sin(angle) * force * 22;
          
          dot.x += (targetX - dot.x) * 0.4;
          dot.y += (targetY - dot.y) * 0.4;
        } else {
          dot.x += (dot.baseX - dot.x) * 0.15;
          dot.y += (dot.baseY - dot.y) * 0.15;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 0.7, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      // Clean up the window event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      clearTimeout(mouseTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // UPDATED: Changed back to pointer-events-none 
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}