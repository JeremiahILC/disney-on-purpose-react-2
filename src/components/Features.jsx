export default function Features() {
  const features = [
    {
      icon: '🙏',
      title: 'Faith-Centered',
      description: 'We seek opportunities to reflect on God\'s character, worship together, and practice the fruit of the Spirit throughout our trip.'
    },
    {
      icon: '💛',
      title: 'Restful & Peaceful',
      description: 'No more frantic park-hopping. We embrace a slower pace that leaves room for rest, spontaneity, and genuine enjoyment.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Intentional Family Time',
      description: 'Every moment is an opportunity to connect, encourage one another, and build memories that point to what truly matters.'
    }
  ];

  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#5b21b6',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Our Approach to Disney
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #f0f9ff, #fef3c7)',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#7c3aed',
                marginBottom: '1rem'
              }}>
                {feature.title}
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
