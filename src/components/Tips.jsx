export default function Tips() {
  const tips = [
    {
      icon: '🌅',
      title: 'Start Slow',
      description: 'Skip rope drop and enjoy a peaceful morning devotional before heading to the parks.'
    },
    {
      icon: '⏸️',
      title: 'Build in Breaks',
      description: 'Schedule downtime for pool days, resort exploration, or simply resting together.'
    },
    {
      icon: '❤️',
      title: 'Practice Patience',
      description: 'Long lines become opportunities to practice kindness, patience, and conversation.'
    },
    {
      icon: '📖',
      title: 'Evening Reflections',
      description: 'End each day sharing what you\'re grateful for and where you saw God at work.'
    }
  ];

  return (
    <section id="tips" style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #ddd6fe 0%, #fbcfe8 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#5b21b6',
          marginBottom: '1.5rem'
        }}>
          Practical Tips & Guides
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#6b7280',
          marginBottom: '2rem',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Ready to transform your Disney experience? Here are some ways we approach our trips with purpose and peace.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {tips.map((tip, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{
                color: '#7c3aed',
                fontSize: '1.3rem',
                marginBottom: '0.5rem'
              }}>
                {tip.icon} {tip.title}
              </h4>
              <p style={{
                color: '#6b7280',
                fontSize: '1rem'
              }}>
                {tip.description}
              </p>
            </div>
          ))}
        </div>
        <a href="#blog" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          color: 'white',
          padding: '1rem 2.5rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem',
          boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
          marginTop: '2rem'
        }}>
          Read More Tips
        </a>
      </div>
    </section>
  );
}
