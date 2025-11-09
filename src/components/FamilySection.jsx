export default function FamilySection() {
  return (
    <section id="about" style={{
      padding: '3rem 1.5rem',
      background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%)'
    }}>
      <style>
        {`
          .family-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: center;
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
        margin: '0 auto'
      }}>
        <div className="family-grid">
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            <img 
              src="/family-photo.jpg" 
              alt="Our Family at Disney World"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '20px'
              }}
            />
          </div>
          <div>
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
