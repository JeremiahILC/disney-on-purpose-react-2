import { useEffect, useRef, useState } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: '🙏',
      title: 'Faith-Centered',
      description: 'Experience Disney as an opportunity to grow closer to God and each other.'
    },
    {
      icon: '⏰',
      title: 'Intentional Pacing',
      description: 'Learn to slow down and enjoy moments instead of rushing through your day.'
    },
    {
      icon: '❤️',
      title: 'Family First',
      description: 'Prioritize connection and conversation over completing a checklist.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '4rem 2rem',
        background: 'white'
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(20px);
            }
            50% {
              transform: scale(1.05) translateY(-5px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .feature-card {
            transition: all 0.4s ease;
          }

          .feature-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 20px 40px rgba(124, 58, 237, 0.2) !important;
          }

          .feature-icon {
            transition: transform 0.3s ease;
          }

          .feature-card:hover .feature-icon {
            transform: scale(1.2) rotate(5deg);
          }

          .features-title {
            animation: ${isVisible ? 'fadeInUp' : 'none'} 0.8s ease-out both;
          }

          .feature-card:nth-child(1) {
            animation: ${isVisible ? 'popIn' : 'none'} 0.6s ease-out 0.2s both;
          }

          .feature-card:nth-child(2) {
            animation: ${isVisible ? 'popIn' : 'none'} 0.6s ease-out 0.4s both;
          }

          .feature-card:nth-child(3) {
            animation: ${isVisible ? 'popIn' : 'none'} 0.6s ease-out 0.6s both;
          }
        `}
      </style>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 className="features-title" style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          color: '#5b21b6',
          marginBottom: '3rem'
        }}>
          A Different Approach
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                background: 'linear-gradient(135deg, #faf5ff 0%, #fce7f3 100%)',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
              }}
            >
              <div className="feature-icon" style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#7c3aed',
                marginBottom: '1rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#6b7280',
                lineHeight: 1.6
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
