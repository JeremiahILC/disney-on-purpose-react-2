export default function Navigation() {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #e0f2fe 0%, #fce7f3 100%)',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Disney on Purpose
        </div>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Home</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Our Story</a></li>
          <li><a href="#tips" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Tips & Guides</a></li>
          <li><a href="#blog" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Blog</a></li>
          <li><a href="#connect" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Connect</a></li>
        </ul>
      </div>
    </nav>
  );
}
