import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#A6ABFF", "#A6ABFF22"],
        borderColor: ["#A6ABFF", "#A6ABFF22"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label + ": " + context.raw + "%";
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div
      role="img"
      aria-label="net-profit-doughnut-chart"
      className="w-50 h-75"
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}
