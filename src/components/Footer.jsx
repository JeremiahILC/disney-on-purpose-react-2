export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e1b4b, #5b21b6)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <p style={{ color: '#e0e7ff' }}>
          &copy; 2024 Disney on Purpose. Seeking the Kingdom in the Magic Kingdom.
        </p>
        <p style={{
          marginTop: '0.5rem',
          fontSize: '0.9rem',
          color: '#e0e7ff'
        }}>
          Not affiliated with The Walt Disney Company
        </p>
      </div>
    </footer>
  );
}
