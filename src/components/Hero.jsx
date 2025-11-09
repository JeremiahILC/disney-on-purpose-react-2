import { useEffect, useRef } from 'react';

export default function Hero() {
  const sparklesRef = useRef(null);

  useEffect(() => {
    // Create floating sparkles
    const sparklesContainer = sparklesRef.current;
    if (!sparklesContainer) return;

    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.innerHTML = '✨';
      sparkle.style.position = 'absolute';
      sparkle.style.fontSize = Math.random() * 20 + 15 + 'px';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.opacity = '0';
      sparkle.style.animation = `float ${Math.random() * 3 + 4}s ease-in-out infinite`;
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      sparklesContainer.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 7000);
    };

    // Create initial sparkles
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createSparkle(), i * 500);
    }

    // Continue creating sparkles
    const interval = setInterval(createSparkle, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #ddd6fe 0%, #fecaca 50%, #fde68a 100%)',
      padding: '3rem 1.5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            50% {
              transform: translateY(-30px) rotate(180deg);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .hero-title {
            background: linear-gradient(90deg, #5b21b6 0%, #ec4899 25%, #7c3aed 50%, #5b21b6 75%, #ec4899 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 4s linear infinite, slideInUp 1s ease-out;
          }

          .hero-subtitle {
            animation: slideInUp 1s ease-out 0.2s both;
          }

          .hero-text {
            animation: slideInUp 1s ease-out 0.4s both;
          }

          .hero-button {
            animation: slideInUp 1s ease-out 0.6s both;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .hero-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4) !important;
          }

          @media (min-width: 769px) {
            .hero-section {
              padding: 5rem 2rem !important;
            }
            .hero-title {
              font-size: 4rem !important;
            }
            .hero-subtitle {
              font-size: 1.8rem !important;
            }
            .hero-text {
              font-size: 1.2rem !important;
            }
          }
        `}
      </style>

      {/* Floating Sparkles */}
      <div ref={sparklesRef} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div className="hero-section" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="hero-title" style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          lineHeight: 1.2
        }}>
          Disney on Purpose
        </h1>
        <p className="hero-subtitle" style={{
          fontSize: '1.3rem',
          color: '#7c3aed',
          fontStyle: 'italic',
          marginBottom: '2rem'
        }}>
          Seeking the Kingdom in the Magic Kingdom
        </p>
        <p className="hero-text" style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
          padding: '0 1rem'
        }}>
          Disney doesn't have to be draining and exhausting. Discover how to experience the magic with rest, intention, and your family at the center.
        </p>
        <a href="#about" className="hero-button" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)'
        }}>
          Learn Our Approach
        </a>
      </div>
    </section>
  );
}
