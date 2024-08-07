import { Change, H5 } from "../index";

export default function TotalCard({ icon, title, value, change }) {
  return (
    <div className="card w-100 w-md-25 rounded-3 bg-primary">
      <div className="card-body">
        <div className="w-fit-content mb-2 px-2 bg-tertiary rounded-2">
          <i className={`${icon} fs-3`}></i>
        </div>
        <H5>{title}</H5>
        <div className="d-flex align-items-end justify-content-between text-end">
          <p className="mb-0 fs-3 fw-bold text-neutral">{value}</p>

          <Change change={change} />
        </div>
      </div>
    </div>
  );
}
