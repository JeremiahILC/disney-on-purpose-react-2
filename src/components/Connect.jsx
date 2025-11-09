export default function Connect() {
  const socialIcons = [
    { emoji: '📷', title: 'Instagram' },
    { emoji: '▶️', title: 'YouTube' },
    { emoji: '👍', title: 'Facebook' },
    { emoji: '📌', title: 'Pinterest' }
  ];

  return (
    <section id="connect" style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #fef3c7 0%, #e0f2fe 100%)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#5b21b6',
          marginBottom: '1.5rem'
        }}>
          Join Our Community
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          Follow along as we share more of our Disney journey, practical tips, and faith-filled adventures. We'd love to connect with you!
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {socialIcons.map((social, index) => (
            <a 
              key={index}
              href="#" 
              title={social.title}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
                transition: 'transform 0.3s'
              }}
            >
              {social.emoji}
            </a>
          ))}
        </div>
        <p style={{
          marginTop: '2rem',
          fontSize: '1rem',
          color: '#6b7280'
        }}>
          Subscribe to our newsletter for weekly encouragement and Disney tips!
        </p>
        <a href="#" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          color: 'white',
          padding: '1rem 2.5rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem',
          boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
          marginTop: '1rem'
        }}>
          Subscribe Now
        </a>
      </div>
    </section>
  );
}
