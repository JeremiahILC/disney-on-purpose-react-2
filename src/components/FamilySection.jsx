import { useEffect, useRef, useState } from 'react';

export default function FamilySection() {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      style={{
        padding: '3rem 1.5rem',
        background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%)'
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

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .family-image {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }

          .family-image:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(0,0,0,0.25) !important;
          }

          .family-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: center;
          }

          .family-image-container {
            animation: fadeInLeft 1s ease-out both;
          }

          .family-text-container {
            animation: fadeInRight 1s ease-out 0.3s both;
          }

          .family-text-container p {
            animation: fadeInUp 0.8s ease-out both;
          }

          .family-text-container p:nth-child(2) {
            animation-delay: 0.5s;
          }

          .family-text-container p:nth-child(3) {
            animation-delay: 0.7s;
          }

          .family-text-container p:nth-child(4) {
            animation-delay: 0.9s;
          }

          @media (min-width: 769px) {
            .family-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 3rem !important;
            }
            .family-section-padding {
              padding: 4rem 2rem !important;
            }
            .family-title {
              font-size: 2.5rem !important;
            }
          }
        `}
      </style>
      <div className="family-section-padding" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s'
      }}>
        <div className="family-grid">
          <div className="family-image-container" style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            <img 
              src="/family-photo.jpg" 
              alt="Our Family at Disney World"
              className="family-image"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '20px'
              }}
            />
          </div>
          <div className="family-text-container">
            <h2 className="family-title" style={{
              fontSize: '2rem',
              color: '#5b21b6',
              marginBottom: '1.5rem'
            }}>
              Meet Our Family
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              marginBottom: '1rem',
              lineHeight: 1.8
            }}>
              We're a family who loves Disney—but we've learned to experience it differently. Instead of rushing from ride to ride in exhaustion, we've discovered how to make our trips restful, meaningful, and centered on what matters most.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              marginBottom: '1rem',
              lineHeight: 1.8
            }}>
              Our Disney adventures are opportunities to reflect on God's goodness, connect as a family, and practice patience, kindness, and joy—even in the midst of crowds and long lines.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              lineHeight: 1.8
            }}>
              We're here to share what we've learned so you can create your own purposeful Disney experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
