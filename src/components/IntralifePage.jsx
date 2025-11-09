import { useEffect, useRef, useState } from 'react';

export default function IntralifePage() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [index]: true }));
            }
          },
          { threshold: 0.1 }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const services = [
    {
      title: 'Home Security',
      description: 'Our expert technicians handle everything, so you get seamless setup, reliable protection, and peace of mind—24/7.',
      icon: '🔒'
    },
    {
      title: 'Home WiFi',
      description: 'Ensure reliable coverage and peak performance with our expert WiFi setup and optimization services.',
      icon: '📶'
    },
    {
      title: 'Home Entertainment',
      description: 'Transform your space with cutting-edge entertainment systems designed for your lifestyle.',
      icon: '🎬'
    },
    {
      title: 'Lighting & Window Treatment',
      description: 'Lighting schedules, lighting scenes, and motorized roller shades fine-tuned to your lifestyle.',
      icon: '💡'
    }
  ];

  const values = [
    {
      title: 'You Can Trust Us',
      description: 'We have seen what works and what does not work; we continue to adapt and learn every day.'
    },
    {
      title: 'You Can Rely on Us',
      description: 'When working with us you have direct access to the owner and management; we are always a call or text away.'
    },
    {
      title: 'You Can Depend on Us',
      description: 'We are determined to provide top notch execution and follow through on every project.'
    }
  ];

  return (
    <div>
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

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .service-card {
            transition: all 0.4s ease;
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
          }

          .value-card {
            transition: all 0.3s ease;
          }

          .value-card:hover {
            transform: scale(1.05);
            background: white !important;
          }

          .cta-button {
            transition: all 0.3s ease;
          }

          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4) !important;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem !important;
            }
            .services-grid {
              grid-template-columns: 1fr !important;
            }
            .values-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        padding: '5rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Home tech made simple.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: 0.95,
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            We provide advanced technology solutions that are simple to use for your home.
          </p>
          <a 
            href="#contact"
            className="cta-button"
            style={{
              display: 'inline-block',
              background: '#ff6b6b',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        style={{
          padding: '5rem 2rem',
          background: '#f8f9fa'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '1rem',
            animation: isVisible[0] ? 'fadeInUp 0.8s ease-out' : 'none'
          }}>
            View all of our services for your home
          </h2>
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  animation: isVisible[0] ? `popIn 0.6s ease-out ${0.2 + index * 0.2}s both` : 'none'
                }}
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#6366f1',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>
                <a 
                  href="#contact"
                  style={{
                    color: '#ff6b6b',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        style={{
          padding: '5rem 2rem',
          background: 'white'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '1rem',
            animation: isVisible[1] ? 'fadeInUp 0.8s ease-out' : 'none'
          }}>
            We are all about you.
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '1.1rem',
            marginBottom: '3rem',
            animation: isVisible[1] ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'
          }}>
            We treat people how we want to be treated and show respect to you and your home with our work.
          </p>
          <div className="values-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card"
                style={{
                  background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
                  padding: '2rem',
                  borderRadius: '15px',
                  animation: isVisible[1] ? `slideInLeft 0.6s ease-out ${0.3 + index * 0.2}s both` : 'none'
                }}
              >
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#6366f1',
                  marginBottom: '1rem'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#4b5563',
                  lineHeight: 1.6
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        style={{
          padding: '5rem 2rem',
          background: '#f8f9fa'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#1f2937',
            marginBottom: '3rem',
            animation: isVisible[2] ? 'fadeInUp 0.8s ease-out' : 'none'
          }}>
            What our customers are saying.
          </h2>
          <div style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            maxWidth: '800px',
            margin: '0 auto',
            animation: isVisible[2] ? 'popIn 0.8s ease-out 0.3s both' : 'none'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#fbbf24', fontSize: '1.5rem' }}>⭐⭐⭐⭐⭐</span>
            </div>
            <p style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              fontStyle: 'italic',
              lineHeight: 1.8
            }}>
              "The team at Intralife made our home technology simple and stress-free. Everything works perfectly and they were always available to help!"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1.5rem'
          }}>
            Ready to take the next step?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: 0.95
          }}>
            Schedule a free consultation with one of our experts. No contracts, no risk.
          </p>
          <a 
            href="mailto:contact@intralifeconsulting.com"
            className="cta-button"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#ff6b6b',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            Schedule a free consultation
          </a>
          <div style={{
            marginTop: '3rem',
            fontSize: '0.95rem',
            opacity: 0.9
          }}>
            <p style={{ marginBottom: '0.5rem' }}>📍 Houston, Texas</p>
            <p style={{ marginBottom: '0.5rem' }}>📧 contact@intralifeconsulting.com</p>
            <p>🕐 We're open Monday through Friday, 9:00 am - 5:00 pm</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1f2937',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          color: '#60a5fa',
          marginBottom: '1rem'
        }}>
          Intralife Consulting
        </h3>
        <p style={{
          color: '#9ca3af',
          fontSize: '0.9rem'
        }}>
          © 2025 Intralife Consulting. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
