import { useEffect, useRef } from 'react';

export default function Fireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let fireworks = [];
    let animationActive = true;
    let animationId;
    let fireworkInterval;

    // Set canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Firework colors inspired by Disney castle
    const colors = [
      '#FF69B4', '#FFD700', '#00CED1', '#FF1493',
      '#9370DB', '#87CEEB', '#FFA500', '#FF6347',
      '#00FFFF', '#FF00FF', '#FFFF00', '#4169E1'
    ];

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        this.gravity = 0.05;
        this.friction = 0.98;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.010;
        this.size = Math.random() * 3 + 2;
        
        this.trail = [];
        this.trailLength = 8;
      }

      update() {
        this.vy += this.gravity;
        this.vx *= this.friction;
        this.vy *= this.friction;
        
        this.x += this.vx;
        this.y += this.vy;
        
        this.alpha -= this.decay;
        
        this.trail.push({ x: this.x, y: this.y, alpha: this.alpha });
        
        if (this.trail.length > this.trailLength) {
          this.trail.shift();
        }
      }

      draw() {
        // Draw trail
        this.trail.forEach((point, index) => {
          const trailAlpha = (index / this.trail.length) * point.alpha * 0.5;
          ctx.save();
          ctx.globalAlpha = trailAlpha;
          ctx.fillStyle = this.color;
          const trailSize = this.size * (index / this.trail.length);
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
        
        // Draw main particle with glow
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    class Firework {
      constructor(x, y) {
        this.x = x;
        this.y = canvas.height;
        this.targetX = x;
        this.targetY = y;
        this.speed = 3;
        this.acceleration = 1.05;
        this.exploded = false;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.trail = [];
        this.trailLength = 10;
      }

      update() {
        if (!this.exploded) {
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < this.speed) {
            this.explode();
          } else {
            this.speed *= this.acceleration;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * this.speed;
            this.y += Math.sin(angle) * this.speed;
            
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > this.trailLength) {
              this.trail.shift();
            }
          }
        }
      }

      draw() {
        if (!this.exploded) {
          // Draw trail
          ctx.save();
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          
          this.trail.forEach((point, index) => {
            ctx.globalAlpha = index / this.trail.length;
            if (index === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          });
          
          ctx.stroke();
          ctx.restore();
          
          // Draw rocket
          ctx.save();
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      explode() {
        this.exploded = true;
        const particleCount = Math.random() * 50 + 100;
        
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(this.x, this.y, this.color));
        }
      }
    }

    function createFirework() {
      if (!animationActive) return;
      
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.5 + 50;
      
      fireworks.push(new Firework(x, y));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      fireworks = fireworks.filter(firework => {
        firework.update();
        firework.draw();
        return !firework.exploded;
      });
      
      particles = particles.filter(particle => {
        particle.update();
        particle.draw();
        return particle.alpha > 0;
      });
      
      animationId = requestAnimationFrame(animate);
    }

    function startFireworks() {
      fireworkInterval = setInterval(() => {
        if (animationActive) {
          const count = Math.random() < 0.4 ? 2 : 1;
          for (let i = 0; i < count; i++) {
            setTimeout(() => createFirework(), i * 200);
          }
        }
      }, 800);
    }

    // Start animation
    animate();
    startFireworks();
    
    // Launch initial burst
    setTimeout(() => createFirework(), 100);
    setTimeout(() => createFirework(), 300);
    setTimeout(() => createFirework(), 500);
    setTimeout(() => createFirework(), 700);
    
    // Fade out after 4 seconds
    setTimeout(() => {
      animationActive = false;
      clearInterval(fireworkInterval);
      canvas.style.opacity = '0';
      canvas.style.transition = 'opacity 2s';
      
      setTimeout(() => {
        canvas.style.display = 'none';
      }, 2000);
    }, 4000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
      clearInterval(fireworkInterval);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}
