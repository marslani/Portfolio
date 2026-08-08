import React, { useEffect, useRef, useState } from 'react';
import './AnimatedCursor.css';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, summary, [role="button"], [role="link"], .btn';

export default function AnimatedCursor() {
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pointerRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef([]);
  const frameRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Dynamic Particle Creation
    const createParticle = (x, y) => {
      // Image design se inspired vibrant neon/cyan teal shades
      const colors = ['#10b981', '#34d399', '#6ee7b7', '#059669'];
      return {
        x: x + (Math.random() - 0.5) * 4,
        y: y + (Math.random() - 0.5) * 4,
        size: Math.random() * 3 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 + 0.2, // Aahista neeche floating Effect
        life: 0,
        maxLife: Math.random() * 25 + 20
      };
    };

    let lastTime = 0;
    const handleMouseMove = (e) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Har thori movement pe chhotay dots add karna
      const now = Date.now();
      if (now - lastTime > 25) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY));
        lastTime = now;
      }
    };

    const handleInteractiveOver = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        setActive(true);
      }
    };

    const handleInteractiveOut = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest(INTERACTIVE_SELECTOR)) {
        setActive(false);
      }
    };

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Smooth Ring Follower (Lerp)
      const targetX = pointerRef.current.x;
      const targetY = pointerRef.current.y;
      
      ringPosRef.current.x += (targetX - ringPosRef.current.x) * 0.18;
      ringPosRef.current.y += (targetY - ringPosRef.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0)`;
      }

      // 2. Render & Update Particle Trail
      particlesRef.current.forEach((p, index) => {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = 1 - p.life / p.maxLife;

        if (p.opacity > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        } else {
          particlesRef.current.splice(index, 1);
        }
      });

      frameRef.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleInteractiveOver);
    document.addEventListener('mouseout', handleInteractiveOut);

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleInteractiveOver);
      document.removeEventListener('mouseout', handleInteractiveOut);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="custom-cursor-canvas" />

      {/* Main Cursor Element */}
      <div className={`custom-cursor ${active ? 'custom-cursor--active' : ''}`}>
        <div ref={dotRef} className="custom-cursor__dot" />
        <div ref={ringRef} className="custom-cursor__ring" />
      </div>
    </>
  );
}