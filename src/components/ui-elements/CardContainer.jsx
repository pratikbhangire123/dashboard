export default function CardContainer({ children, className }) {
  return (
    <section className="card h-100 bg-primary">
      <div className={`card-body ${className}`}>{children}</div>
    </section>
  );
}
