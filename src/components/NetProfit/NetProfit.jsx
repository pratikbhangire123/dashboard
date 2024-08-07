import { CardContainer, Change, DoughnutChart, H3, H5 } from "../index";
import { netProfit } from "../../data.json";

export default function NetProfit() {
  return (
    <CardContainer className="card-body d-flex align-items-center justify-content-between">
      <div>
        <H5>Net Profit</H5>

        <H3 className="my-2 fs-2 fw-bold">{netProfit.value}</H3>

        <Change change={netProfit.change} />
      </div>

      <DoughnutChart />
    </CardContainer>
  );
}
