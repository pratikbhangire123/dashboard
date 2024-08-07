import { BarChart, CardContainer, H3 } from "../index";

export default function Activity() {
  return (
    <CardContainer aria-label="activity-card">
      <div className="d-flex mb-1 align-items-center justify-content-between">
        <H3>Activity</H3>

        <div className="dropdown">
          <button
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            className="btn btn-secondary text-secondary bg-neutralLight dropdown-toggle px-3 py-1 fw-semibold rounded-5"
          >
            Weekly
          </button>

          <ul className="dropdown-menu">
            <li className="dropdown-item">Monthly</li>
          </ul>
        </div>
      </div>

      <BarChart />
    </CardContainer>
  );
}
