import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none'
        }}>
          Disney on Purpose
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.8rem',
            color: '#7c3aed',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-menu-button"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}
        className="desktop-menu">
          <li><Link to="/" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Home</Link></li>
          <li><Link to="/testimonies" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Testimonies</Link></li>
          <li><Link to="/intralife" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Intralife</Link></li>
          <li><a href="/#about" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Our Story</a></li>
          <li><a href="/#tips" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Tips & Guides</a></li>
          <li><a href="/#connect" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>Connect</a></li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu-dropdown" style={{
          display: 'none',
          flexDirection: 'column',
          gap: '1rem',
          paddingTop: '1rem',
          marginTop: '1rem',
          borderTop: '1px solid rgba(124, 58, 237, 0.2)'
        }}>
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500, padding: '0.5rem 0' }}
          >
            Home
          </Link>
          <Link 
            to="/testimonies" 
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500, padding: '0.5rem 0' }}
          >
            Testimonies
          </Link>
          <Link 
            to="/intralife" 
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500, padding: '0.5rem 0' }}
          >
            Intralife
          </Link>
          <a 
            href="/#about" 
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500, padding: '0.5rem 0' }}
          >
            Our Story
          </a>
          <a 
            href="/#tips" 
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500, padding: '0.5rem 0' }}
          >
            Tips & Guides
          </a>
          <a 
            href="/#connect" 
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none', color: '#6b7280', fontWeight: 500, padding: '0.5rem 0' }}
          >
            Connect
          </a>
        </div>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            .mobile-menu-button {
              display: block !important;
            }
            .desktop-menu {
              display: none !important;
            }
            .mobile-menu-dropdown {
              display: flex !important;
            }
          }
        `}
      </style>
    </nav>
  );
}
