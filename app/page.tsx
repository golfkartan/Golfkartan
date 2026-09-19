import { MapPin, Search, Star, ArrowRight, SlidersHorizontal } from "lucide-react";

const courses = [
  { name: "Täby Golfklubb", area: "Täby", price: "650 kr", rating: "4.5", x: "69%", y: "31%" },
  { name: "Ullna Golf Club", area: "Åkersberga", price: "1 095 kr", rating: "4.7", x: "82%", y: "23%" },
  { name: "Kallfors Golfklubb", area: "Järna", price: "695 kr", rating: "4.4", x: "47%", y: "70%" },
  { name: "Brollsta Golfklubb", area: "Vallentuna", price: "550 kr", rating: "4.2", x: "73%", y: "38%" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark">G</span>
          <span>GOLFKARTAN</span>
        </div>
        <div className="nav-links">
          <a href="#karta">Karta</a>
          <a href="#banor">Golfbanor</a>
          <a href="#om">Om Golfkartan</a>
        </div>
        <button className="account">Logga in</button>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">SVERIGES GOLFKARTA</div>
          <h1>Hitta din nästa<br /><em>golfrunda.</em></h1>
          <p>Jämför golfbanor, priser, faciliteter och omdömen — på ett och samma ställe.</p>
          <div className="search-box">
            <Search size={20} />
            <input placeholder="Sök efter golfbana eller område..." />
            <button>Sök</button>
          </div>
          <div className="quick-filters">
            <button><SlidersHorizontal size={16} /> Filter</button>
            <button>Under 600 kr</button>
            <button>Pay & Play</button>
            <button>18 hål</button>
          </div>
        </div>
      </section>

      <section className="map-section" id="karta">
        <div className="section-heading">
          <div>
            <div className="eyebrow">UTFORSKA</div>
            <h2>Golfbanor nära Stockholm</h2>
          </div>
          <span className="result-count">{courses.length} banor</span>
        </div>

        <div className="map-layout">
          <div className="course-list">
            {courses.map((course, i) => (
              <article className="course-card" key={course.name}>
                <div className="course-image">
                  <span className="image-placeholder">GOLF</span>
                  <span className="price-tag">{course.price}</span>
                </div>
                <div className="course-info">
                  <div className="course-topline">
                    <span>{course.area}</span>
                    <span className="rating"><Star size={14} fill="currentColor" /> {course.rating}</span>
                  </div>
                  <h3>{course.name}</h3>
                  <p>18 hål · Driving range · Restaurang</p>
                  <button className="details">Visa bana <ArrowRight size={15} /></button>
                </div>
              </article>
            ))}
          </div>

          <div className="map">
            <div className="map-grid"></div>
            <div className="map-label stockholm">STOCKHOLM</div>
            <div className="water water-one"></div>
            <div className="water water-two"></div>
            {courses.map((course) => (
              <button
                className="map-pin"
                key={course.name}
                style={{ left: course.x, top: course.y }}
                title={course.name}
              >
                <span>⛳</span>
              </button>
            ))}
            <div className="map-note">Kartans riktiga data kopplas in i nästa steg</div>
          </div>
        </div>
      </section>

      <section className="why" id="om">
        <div>
          <div className="eyebrow">GOLFKARTAN</div>
          <h2>Allt du behöver för att välja nästa bana.</h2>
        </div>
        <div className="feature-grid">
          <div><strong>Pris</strong><p>Jämför greenfee och andra kostnader.</p></div>
          <div><strong>Omdömen</strong><p>Se vad andra golfare faktiskt tycker.</p></div>
          <div><strong>Faciliteter</strong><p>Driving range, restaurang, Pay & Play och mer.</p></div>
        </div>
      </section>

      <footer>© 2026 Golfkartan · Byggd för golfare.</footer>
    </main>
  );
}
