import { useEffect, useRef, useState } from 'react';

export default function Tips() {
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

  const tips = [
    {
      emoji: '☀️',
      title: 'Start Your Day with Prayer',
      description: 'Before entering the parks, gather as a family to pray and set intentions for the day.'
    },
    {
      emoji: '🎢',
      title: 'Choose Quality Over Quantity',
      description: 'Pick 2-3 must-do attractions instead of trying to ride everything. Enjoy the experience fully.'
    },
    {
      emoji: '🍦',
      title: 'Build in Rest Time',
      description: 'Schedule afternoon breaks at the hotel or find quiet spots in the parks to recharge.'
    },
    {
      emoji: '💬',
      title: 'Use Wait Times for Connection',
      description: 'Lines are opportunities for conversation, games, and building memories together.'
    }
  ];

  return (
    <section 
      id="tips"
      ref={sectionRef}
      style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #e0f2fe 0%, #fce7f3 100%)'
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

          @keyframes slideInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .tips-title {
            animation: ${isVisible ? 'fadeInUp' : 'none'} 0.8s ease-out both;
          }

          .tip-item {
            transition: all 0.3s ease;
          }

          .tip-item:hover {
            transform: translateX(10px);
            background: white !important;
            box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15) !important;
          }

          .tip-emoji {
            transition: transform 0.3s ease;
          }

          .tip-item:hover .tip-emoji {
            transform: scale(1.3) rotate(10deg);
          }

          .tip-item:nth-child(1) {
            animation: ${isVisible ? 'slideInFromLeft' : 'none'} 0.6s ease-out 0.2s both;
          }

          .tip-item:nth-child(2) {
            animation: ${isVisible ? 'slideInFromLeft' : 'none'} 0.6s ease-out 0.4s both;
          }

          .tip-item:nth-child(3) {
            animation: ${isVisible ? 'slideInFromLeft' : 'none'} 0.6s ease-out 0.6s both;
          }

          .tip-item:nth-child(4) {
            animation: ${isVisible ? 'slideInFromLeft' : 'none'} 0.6s ease-out 0.8s both;
          }
        `}
      </style>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 className="tips-title" style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          color: '#5b21b6',
          marginBottom: '3rem'
        }}>
          Practical Tips to Get Started
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {tips.map((tip, index) => (
            <div
              key={index}
              className="tip-item"
              style={{
                display: 'flex',
                gap: '1.5rem',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '15px',
                alignItems: 'flex-start',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}
            >
              <div className="tip-emoji" style={{
                fontSize: '3rem',
                flexShrink: 0
              }}>
                {tip.emoji}
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#7c3aed',
                  marginBottom: '0.5rem'
                }}>
                  {tip.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: 1.6
                }}>
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
