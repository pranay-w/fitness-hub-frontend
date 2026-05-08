function PageHero({ title, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Fitness HUB</p>
        <h1>{title}</h1>
        <p className="section-description">{description}</p>
      </div>
    </section>
  );
}

export default PageHero;
