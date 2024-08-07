export default function MenuItem({ children, className, props }) {
  return (
    <li
      {...props}
      className={`nav-item px-2 py-1 rounded-circle bg-neutralLight ${className}`}
    >
      {children}
    </li>
  );
}
