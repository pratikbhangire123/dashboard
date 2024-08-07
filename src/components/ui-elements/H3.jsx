export default function H3({ children, color = "text-neutral", className }) {
  return (
    <h3 className={`card-title m-0 fs-5 fw-bold ${color} ${className}`}>
      {children}
    </h3>
  );
}
