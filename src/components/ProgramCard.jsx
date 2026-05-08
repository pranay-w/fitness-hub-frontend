function ProgramCard({ program }) {
  return (
    <article className="content-card">
      <img src={program.image} alt={program.title} loading="lazy" decoding="async" />
      <div className="card-body">
        <p className="card-meta">{program.level}</p>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
      </div>
    </article>
  );
}

export default ProgramCard;
