function FeatureTable({ rows }) {
  return (
    <div className="feature-table">
      {rows.map((row) => (
        <article key={row.title} className="feature-row">
          <div className="feature-row-title">{row.title}</div>
          <div className="feature-row-copy">{row.description}</div>
        </article>
      ))}
    </div>
  );
}

export default FeatureTable;
