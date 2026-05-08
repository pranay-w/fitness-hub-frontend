import { Link } from "react-router-dom";

function PlanCard({ plan }) {
  return (
    <article className={`content-card pricing-card ${plan.featured ? "featured" : ""}`}>
      <img src={plan.image} alt={plan.name} />
      <div className="card-body">
        <h3>{plan.name}</h3>
        <p>{plan.summary}</p>
        <div className="price-tag">{plan.price}</div>
        <ul className="feature-list">
          {plan.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <Link className="button button-primary" to="/contact">
          Join Now
        </Link>
      </div>
    </article>
  );
}

export default PlanCard;
