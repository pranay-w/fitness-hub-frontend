import { Link } from "react-router-dom";
import FeatureTable from "../FeatureTable";
import HeroSection from "../HeroSection";
import ProgramCard from "../ProgramCard";
import SectionHeading from "../SectionHeading";
import { featureRows, programs } from "../../data/siteData";

function Home() {
  return (
    <>
      <HeroSection />

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Why members stay"
            title="Built for people who actually train"
            description="Not a selfie gym. A disciplined training space built around progression, accountability, and measurable performance."
          />
          <FeatureTable rows={featureRows} />
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Programs"
            title="Plans that deliver beyond motivation"
            description="Every block follows real training principles and is designed to stay effective long after the first burst of excitement fades."
          />
          <div className="card-grid">
            {programs.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>If you are ready to work, we are ready to coach.</h2>
            <p>
              Choose a plan, commit to the block, and show up. Your effort plus
              our system creates the result.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button button-dark" to="/plans">
              Choose a Plan
            </Link>
            <Link className="button button-secondary" to="/contact">
              Talk to a Coach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
