import InfoPanel from "../InfoPanel";
import PageHero from "../PageHero";
import ProductCard from "../ProductCard";
import { storeProducts } from "../../data/siteData";

function Store() {
  return (
    <>
      <PageHero
        title="Store"
        description="Reliable training essentials chosen for performance, durability, and practical daily use."
      />
      <section className="section-block">
        <div className="container">
          <div className="card-grid">
            {storeProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <InfoPanel title="Why these products?">
            Everything here earns its place. We focus on useful equipment and
            supplements that support training instead of selling clutter.
          </InfoPanel>
        </div>
      </section>
    </>
  );
}

export default Store;
