export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #ddd6fe 0%, #fecaca 50%, #fde68a 100%)',
      padding: '3rem 1.5rem',
      textAlign: 'center'
    }}>
      <style>
        {`
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
      <div className="hero-section">
        <h1 className="hero-title" style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#5b21b6',
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
        <a href="#about" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
          transition: 'transform 0.3s'
        }}>
          Learn Our Approach
        </a>
      </div>
    </section>
  );
}
