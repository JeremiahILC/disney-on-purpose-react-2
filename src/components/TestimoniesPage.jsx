export default function TestimoniesPage() {
  const testimonies = [
    {
      id: 1,
      title: "A Restful Adventure",
      familyName: "The Mallory Family",
      image: "/mallory-family.jpg",
      story1: "We used to think Disney meant go-go-go from rope drop to fireworks. Our first trip following the Disney on Purpose approach completely changed everything. Instead of feeling exhausted and overwhelmed, we found ourselves actually enjoying each moment.",
      highlight: "The kids kept asking, 'Why does Disney feel so different this time?' It was because we weren't rushing. We were present.",
      story2: "Morning devotionals by the pool, intentional conversations in line, and reflecting on God's creativity through the parks—these became our favorite parts of the trip. We actually felt rested when we got home!",
      location: "📍 Magic Kingdom • Spring 2024",
      imagePosition: "center 35%"
    },
    {
      id: 2,
      title: "Finding God in the Magic",
      familyName: "The Allison Family",
      image: "/allison-family.jpg",
      story1: "As parents, we were nervous about taking our three kids to Disney. Would it be too chaotic? Too expensive? Too exhausting? But when we decided to do Disney \"on purpose,\" everything shifted.",
      highlight: "We prayed together before entering the parks, asking God to help us demonstrate patience, kindness, and joy. And He answered!",
      story2: "Our kids learned that waiting in line could be an opportunity to encourage other families. We saw God's fingerprints everywhere—in the creativity of Imagineers, in kind Cast Members, in answered prayers for shorter wait times. This wasn't just a vacation; it was a faith-building experience for our entire family.",
      location: "📍 EPCOT • Fall 2024",
      imagePosition: "center center"
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #ddd6fe 0%, #fce7f3 100%)',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#5b21b6',
          marginBottom: '1rem'
        }}>
          Family Testimonies
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#6b7280',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Real families sharing how they've experienced Disney with rest, intention, and faith at the center.
        </p>
      </section>

      {/* Testimonies */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        {testimonies.map((testimony, index) => (
          <div key={testimony.id} style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
              flexDirection: index % 2 === 1 ? 'row-reverse' : 'row'
            }}>
              <div style={{
                width: '100%',
                height: '500px',
                overflow: 'hidden',
                order: index % 2 === 1 ? 2 : 1
              }}>
                <img 
                  src={testimony.image}
                  alt={testimony.familyName}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: testimony.imagePosition
                  }}
                />
              </div>
              <div style={{
                padding: '3rem',
                order: index % 2 === 1 ? 1 : 2
              }}>
                <h2 style={{
                  fontSize: '2rem',
                  color: '#5b21b6',
                  marginBottom: '0.5rem'
                }}>
                  {testimony.title}
                </h2>
                <p style={{
                  fontSize: '1.3rem',
                  color: '#ec4899',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  {testimony.familyName}
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#4a5568',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem'
                }}>
                  {testimony.story1}
                </p>
                <div style={{
                  background: 'linear-gradient(135deg, #fef3c7, #fce7f3)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  borderLeft: '4px solid #7c3aed',
                  fontStyle: 'italic',
                  color: '#5b21b6',
                  margin: '1.5rem 0'
                }}>
                  "{testimony.highlight}"
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#4a5568',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem'
                }}>
                  {testimony.story2}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#9ca3af',
                  marginTop: '1rem'
                }}>
                  {testimony.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, #ddd6fe 0%, #fecaca 50%, #fde68a 100%)',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#5b21b6',
          marginBottom: '1.5rem'
        }}>
          Want to Share Your Story?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#6b7280',
          marginBottom: '2rem',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Have you experienced Disney with purpose and rest? We'd love to hear how your family's trip went! Your story could encourage other families to do Disney differently.
        </p>
        <a 
          href="mailto:hello@disneyonpurpose.com"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem',
            boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
            transition: 'transform 0.3s'
          }}
        >
          Share Your Testimony
        </a>
      </section>
    </div>
  );
}
