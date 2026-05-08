import { Link } from "react-router-dom";

function HeroSection() {
  const heroAthlete = `${import.meta.env.BASE_URL}assets/images/hero-athlete.jpg`;

  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Performance gym experience</p>
          <h1>
            Build your body
            <span>with structure, discipline, and real coaching.</span>
          </h1>
          <p className="hero-copy">
            Fitness is not about hype. It is about consistency, proven programming,
            and showing up long enough to become stronger.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/plans">
              Join Now
            </Link>
            <Link className="button button-secondary" to="/about">
              Learn More
            </Link>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="highlight-card">
            <p className="highlight-label">8-Week Strength Block</p>
            <h2>Heavy compounds. Smart progress.</h2>
            <ul>
              <li>4 focused training days per week</li>
              <li>Planned progression and recovery</li>
              <li>Built around squat, bench, deadlift, and press</li>
            </ul>
          </div>
          <div className="highlight-image">
            <img src={heroAthlete} alt="Woman training in a dark gym" loading="eager" decoding="async" />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
