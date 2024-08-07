export default function CardContainer({ children, props, className }) {
  return (
    <section {...props} className="card h-100 bg-primary">
      <div className={`card-body ${className}`}>{children}</div>
    </section>
  );
}
