import formatChangeString from "../../utils/formatChangeString";

export default function Change({ change }) {
  return (
    <p
      className={`mb-0 fw-bold ${change < 0 ? "text-danger" : "text-success"}`}
    >
      <i
        className={`mx-1 ${
          change < 0 ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"
        }`}
      ></i>
      {formatChangeString(change)}
    </p>
  );
}
