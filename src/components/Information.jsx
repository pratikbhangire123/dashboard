import { CardContainer, H3 } from "./index";
import { information as informationItems } from "../data.json";

export default function Information() {
  return (
    <CardContainer>
      {informationItems.map((item) => (
        <div
          key={item.name}
          className="d-flex align-items-center justify-content-between my-3"
        >
          <div className="d-flex align-items-center gap-2">
            <div className="px-3 py-2 bg-tertiary rounded-circle">
              <i className={`fs-4 ${item.icon}`}></i>
            </div>
            <H3 className="fs-5">{item.name}</H3>
          </div>

          <div className="px-2 py-1 bg-neutralLight rounded-circle">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      ))}
    </CardContainer>
  );
}
