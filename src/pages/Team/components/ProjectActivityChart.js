import ReactApexChart from "react-apexcharts";
import {
  COLOR_PRIMARY_ONE,
  COLOR_TEXT_PRIMARY,
} from "../../../constants/styles";
import styled from "@emotion/styled";

const ProjectActivityChart = () => {
  const series = [75];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      background: "yellow",
      radialBar: {
        hollow: {
          size: "90%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          margin: 15,
          dropShadow: {
            enabled: true,
            top: 4,
            left: 0,
            blur: 10,
            opacity: 0.26,
            color: "#3954FF",
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: COLOR_TEXT_PRIMARY,
            fontSize: "9px",
          },
          value: {
            formatter: function (val) {
              return val + "%";
            },
            color: COLOR_TEXT_PRIMARY,
            fontSize: "25px",
            fontWeight: 600,
            show: true,
            offsetY: 5,
          },
        },
      },
    },
    fill: {
      colors: [COLOR_PRIMARY_ONE],
    },
    labels: ["Project Activity"],
  };

  return (
    <Holder>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={202}
      />
    </Holder>
  );
};

export default ProjectActivityChart;

const Holder = styled.div`
  background: rgba(57, 84, 255, 0.08);
  width: 192px;
  height: 192px;
  border-radius: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
