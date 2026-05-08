import InfoPanel from "../InfoPanel";
import PageHero from "../PageHero";
import PlanCard from "../PlanCard";
import { plans } from "../../data/siteData";

function Plans() {
  return (
    <>
      <PageHero
        title="Membership Plans"
        description="Pick the membership that matches your training style and current level, then build momentum with a clear system."
      />
      <section className="section-block">
        <div className="container">
          <div className="card-grid">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <InfoPanel title="Not sure which plan fits you?">
            Standard is the best starting point for most members. It combines full
            access, structured training, and coaching support while leaving room to
            upgrade as your consistency grows.
          </InfoPanel>
        </div>
      </section>
    </>
  );
}

export default Plans;
