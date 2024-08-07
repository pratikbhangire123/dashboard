import { TotalCard } from "../index";
import { totals as TotalsData } from "../../data.json";

export default function Totals() {
  return (
    <section
      role="region"
      aria-labelledby="totals-section"
      className="d-flex flex-column flex-md-row h-100 gap-2"
    >
      {TotalsData.map((total) => (
        <TotalCard
          key={total.name}
          icon={total.iconName}
          title={total.name}
          value={total.value}
          change={total.change}
          aria-labelledby={`total-card-${total.name}`}
        />
      ))}
    </section>
  );
}
