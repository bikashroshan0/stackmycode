import { useEffect, useRef } from 'react';

export default function InteractiveDots() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseTimeout;

    const dpr = window.devicePixelRatio || 1;
    let width, height;

    const dots = [];
    const spacing = 16; 

    const initDots = () => {
      dots.length = 0;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          dots.push({ x, y, baseX: x, baseY: y });
        }
      }
    };

    const resize = () => {
      if (!parent) return;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      initDots();
    };

    const mouse = { x: -1000, y: -1000, radius: 200 };

    const handleMouseMove = (e) => {
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
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    resize(); 

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const isDark = document.documentElement.classList.contains('dark');
      const dotColor = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(7, 7, 154, 0.35)';

      dots.forEach(dot => {
        // THE FIX: Calculate distance from the mouse to the dot's ORIGINAL grid position
        let dx = mouse.x - dot.baseX;
        let dy = mouse.y - dot.baseY;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        let targetX = dot.baseX;
        let targetY = dot.baseY;

        if (distance < mouse.radius && distance > 0) {
          const force = (mouse.radius - distance) / mouse.radius;
          
          // Set how many pixels they are allowed to shift maximum (prevents clumping)
          const maxDisplacement = 70; 
          const displacement = force * maxDisplacement;
          
          // Calculate precise target coordinate ensuring they maintain relative spacing
          targetX = dot.baseX - (dx / distance) * displacement;
          targetY = dot.baseY - (dy / distance) * displacement;
        }

        // Smoothly glide to the target coordinate
        dot.x += (targetX - dot.x) * 0.2;
        dot.y += (targetY - dot.y) * 0.2;

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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      clearTimeout(mouseTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}