export default function H5({
  children,
  color = "text-neutralLight",
  className,
}) {
  return (
    <h5 className={`card-title m-0 fs-6 ${color} ${className}`}>{children}</h5>
  );
}
