export default function Hero() {
  return (
    <section id="home" style={{
      background: 'linear-gradient(135deg, #ddd6fe 0%, #fecaca 50%, #fde68a 100%)',
      padding: '5rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#5b21b6',
          marginBottom: '1rem',
          fontWeight: 700
        }}>
          Disney on Purpose
        </h1>
        <p style={{
          fontSize: '1.8rem',
          color: '#7c3aed',
          fontStyle: 'italic',
          marginBottom: '1.5rem'
        }}>
          Seeking the Kingdom in the Magic Kingdom
        </p>
        <p style={{
          fontSize: '1.2rem',
          color: '#6b7280',
          maxWidth: '700px',
          margin: '0 auto 2rem',
          lineHeight: 1.8
        }}>
          Disney doesn't have to be overwhelming and exhausting. Discover how our family experiences the magic with rest, love, and faith—demonstrating the fruit of the Holy Spirit while creating intentional memories together.
        </p>
        <a href="#about" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          color: 'white',
          padding: '1rem 2.5rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem',
          boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}>
          Start Your Journey
        </a>
      </div>
    </section>
  );
}
