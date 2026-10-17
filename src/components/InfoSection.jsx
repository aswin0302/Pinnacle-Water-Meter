export default function InfoSection({
  id,
  eyebrow,
  title,
  description,
  background = "#ffffff",
}) {
  return (
    <section
      id={id}
      className="content-section"
      style={{ background }}
    >
      <div className="section-container">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>
    </section>
  );
}