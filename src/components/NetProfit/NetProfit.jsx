import { CardContainer, Change, DoughnutChart, H3, H5 } from "../index";
import { netProfit } from "../../data.json";

export default function NetProfit() {
  return (
    <CardContainer
      role="region"
      aria-labelledby="net-profit-card"
      className="card-body d-flex align-items-center justify-content-between"
    >
      <div>
        <H5 aria-label="net-profit-title">Net Profit</H5>

        <H3 aria-label="" className="my-2 fs-2 fw-bold">
          {netProfit.value}
        </H3>

        <Change change={netProfit.change} />
      </div>

      <DoughnutChart />
    </CardContainer>
  );
}
