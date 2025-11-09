import { useEffect, useRef } from 'react';

export default function Fireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor(x, y, color, angle) {
        this.x = x;
        this.y = y;
        this.color = color;
        const speed = Math.random() * 6 + 3;
        this.velocity = {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        };
        this.alpha = 1;
        this.decay = Math.random() * 0.012 + 0.012;
        this.size = Math.random() * 3 + 2;
        this.gravity = 0.08;
        this.friction = 0.98;
        this.trail = [];
        this.maxTrail = 8;
      }

      draw() {
        ctx.save();
        for (let i = 0; i < this.trail.length; i++) {
          const trailAlpha = (this.alpha * (i / this.trail.length)) * 0.5;
          ctx.globalAlpha = trailAlpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.trail[i].x, this.trail[i].y, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrail) {
          this.trail.shift();
        }
        
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        this.velocity.y += this.gravity;
        
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
        this.draw();
      }
    }

    class Rocket {
      constructor(targetX, targetY) {
        this.x = targetX;
        this.y = canvas.height;
        this.targetY = targetY;
        this.exploded = false;
        this.velocity = -12;
        this.acceleration = 0.2;
        this.trail = [];
        this.maxTrail = 15;
        this.color = '#fbbf24';
      }

      draw() {
        ctx.save();
        
        for (let i = 0; i < this.trail.length; i++) {
          const alpha = i / this.trail.length;
          ctx.globalAlpha = alpha * 0.8;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.trail[i].x, this.trail[i].y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.globalAlpha = 1;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      update() {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrail) {
          this.trail.shift();
        }

        this.velocity += this.acceleration;
        this.y += this.velocity;

        this.draw();

        if (this.y <= this.targetY) {
          this.exploded = true;
        }
      }
    }

    class Firework {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.exploded = false;
        this.colors = [
          '#7c3aed', '#ec4899', '#fbbf24', '#60a5fa',
          '#f472b6', '#c084fc', '#a78bfa', '#fcd34d'
        ];
        this.explosionType = Math.random();
      }

      createParticles() {
        if (this.explosionType < 0.3) {
          this.createCircularBurst(100, 7);
        } else if (this.explosionType < 0.6) {
          this.createStarburstPattern(60, 5);
        } else if (this.explosionType < 0.8) {
          this.createRingPattern(80, 6);
        } else {
          this.createSpectacularBurst(120, 8);
        }
        this.exploded = true;
      }

      createCircularBurst(count, speed) {
        const angleStep = (Math.PI * 2) / count;
        for (let i = 0; i < count; i++) {
          const angle = angleStep * i;
          const color = this.colors[Math.floor(Math.random() * this.colors.length)];
          const particle = new Particle(this.x, this.y, color, angle);
          particle.velocity.x = Math.cos(angle) * speed;
          particle.velocity.y = Math.sin(angle) * speed;
          this.particles.push(particle);
        }
      }

      createStarburstPattern(count, speed) {
        const points = 8;
        for (let i = 0; i < points; i++) {
          const angle = (Math.PI * 2 / points) * i;
          const particlesPerRay = count / points;
          
          for (let j = 0; j < particlesPerRay; j++) {
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            const particle = new Particle(this.x, this.y, color, angle);
            const raySpeed = speed * (0.5 + (j / particlesPerRay) * 0.5);
            particle.velocity.x = Math.cos(angle) * raySpeed;
            particle.velocity.y = Math.sin(angle) * raySpeed;
            this.particles.push(particle);
          }
        }
      }

      createRingPattern(count, speed) {
        const angleStep = (Math.PI * 2) / count;
        for (let i = 0; i < count; i++) {
          const angle = angleStep * i;
          const color = this.colors[Math.floor(Math.random() * this.colors.length)];
          const particle = new Particle(this.x, this.y, color, angle);
          particle.velocity.x = Math.cos(angle) * speed;
          particle.velocity.y = Math.sin(angle) * speed;
          particle.size = Math.random() * 4 + 3;
          this.particles.push(particle);
        }
      }

      createSpectacularBurst(count, speed) {
        for (let layer = 0; layer < 2; layer++) {
          const layerCount = count / 2;
          const angleStep = (Math.PI * 2) / layerCount;
          const layerSpeed = speed * (1 + layer * 0.3);
          
          for (let i = 0; i < layerCount; i++) {
            const angle = angleStep * i;
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            const particle = new Particle(this.x, this.y, color, angle);
            particle.velocity.x = Math.cos(angle) * layerSpeed;
            particle.velocity.y = Math.sin(angle) * layerSpeed;
            particle.size = Math.random() * 5 + 3;
            this.particles.push(particle);
          }
        }
      }

      update() {
        this.particles.forEach((particle, index) => {
          if (particle.alpha <= 0) {
            this.particles.splice(index, 1);
          } else {
            particle.update();
          }
        });
      }
    }

    let rockets = [];
    let fireworks = [];
    let animationId;
    let fireworkCount = 0;
    const maxFireworks = 15;

    function createFirework() {
      if (fireworkCount < maxFireworks) {
        const x = Math.random() * canvas.width;
        const targetY = Math.random() * (canvas.height * 0.3) + 50;
        rockets.push(new Rocket(x, targetY));
        fireworkCount++;
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rockets.forEach((rocket, index) => {
        rocket.update();
        if (rocket.exploded) {
          const firework = new Firework(rocket.x, rocket.y);
          firework.createParticles();
          fireworks.push(firework);
          rockets.splice(index, 1);
        }
      });

      fireworks.forEach((firework, index) => {
        firework.update();
        if (firework.particles.length === 0) {
          fireworks.splice(index, 1);
        }
      });

      if (rockets.length > 0 || fireworks.length > 0 || fireworkCount < maxFireworks) {
        animationId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          canvas.style.opacity = '0';
          canvas.style.transition = 'opacity 1s';
          setTimeout(() => {
            canvas.style.display = 'none';
          }, 1000);
        }, 500);
      }
    }

    let interval = setInterval(() => {
      createFirework();
      
      if (Math.random() > 0.6 && fireworkCount < maxFireworks) {
        setTimeout(() => createFirework(), 100);
      }
      
      if (fireworkCount >= maxFireworks) {
        clearInterval(interval);
      }
    }, 500);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      clearInterval(interval);
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
