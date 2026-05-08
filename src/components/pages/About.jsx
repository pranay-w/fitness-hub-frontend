import InfoPanel from "../InfoPanel";
import PageHero from "../PageHero";
import { aboutSections } from "../../data/siteData";

function About() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Fitness HUB exists for people who want structure, results, and a place to train with real intent."
      />
      <section className="section-block">
        <div className="container stacked-layout">
          {aboutSections.map((section) => (
            <article
              key={section.title}
              className={`split-card ${section.reverse ? "reverse" : ""}`}
            >
              <div className="split-card-copy">
                <p className="eyebrow">Our approach</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <img src={section.image} alt={section.title} />
            </article>
          ))}
          <InfoPanel title="What makes us different?">
            We do not sell shortcuts. We focus on sustainable progress that builds
            strength, confidence, discipline, and long-term habits.
          </InfoPanel>
        </div>
      </section>
    </>
  );
}

export default About;
