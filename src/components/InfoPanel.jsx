function InfoPanel({ title, children }) {
  return (
    <section className="info-panel">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default InfoPanel;
