export default function H5({
  children,
  color = "text-neutralLight",
  props,
  className,
}) {
  return (
    <h5 {...props} className={`card-title m-0 fs-6 ${color} ${className}`}>
      {children}
    </h5>
  );
}
