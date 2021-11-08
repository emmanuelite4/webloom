import ReactApexChart from "react-apexcharts";
import {
  COLOR_PRIMARY_ONE,
  COLOR_PRIMARY_THREE,
} from "../../../constants/styles";

const PopulationChart = () => {
  const series = [15, 10];
  const options = {
    labels: ["Male", "Female"],
    colors: [COLOR_PRIMARY_ONE, COLOR_PRIMARY_THREE],
    dataLabels: {
      enabled: true,
      formatter: function (val: any, other: any) {
        return other.w.config.labels[other.seriesIndex][0];
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 150,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart options={options} series={series} type="pie" width={150} />
  );
};

export default PopulationChart;
