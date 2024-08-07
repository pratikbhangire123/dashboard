import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const data = {
    labels: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
    datasets: [
      {
        backgroundColor: "#A6ABFF",
        borderColor: "#A6ABFF",
        borderWidth: 1,
        borderRadius: 10,
        barPercentage: 0.5,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [
          15234, 13412, 17892, 10983, 16543, 19321, 17456, 12567, 18234, 14567,
          16234, 19834, 12345, 17654, 15432, 19023, 13892, 18234, 17456, 12567,
          16543, 19321, 15432, 19023, 19834, 12345, 17654, 14567, 15234, 13892,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#B5B5B5",
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          color: "#B5B5B5",

          callback: function (value) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },

        border: {
          display: false,
        },

        grid: {
          color: "#A5A5A520",
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div role="img" aria-label="activity-bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
}
