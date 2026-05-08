import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="content-card">
      <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="card-meta">{product.detail}</p>
        <div className="price-tag">{product.price}</div>
        <Link className="button button-primary" to="/contact">
          Buy Now
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
