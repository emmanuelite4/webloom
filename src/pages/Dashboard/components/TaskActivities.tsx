import styled from "@emotion/styled";
import { CSS_CARD } from "../../../styles/shared";
import { Text14 } from "../../../components/shared/Text/Text";
import ReactApexChart from "react-apexcharts";
import {
  COLOR_PRIMARY_ONE,
  COLOR_PRIMARY_THREE,
} from "../../../constants/styles";

const TaskActivities = () => {
  const series = [
    {
      name: "Received",
      data: [100, 110, 130, 120, 90, 110],
    },
    {
      name: "Sent",
      data: [50, 95, 110, 100, 40, 90],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    },
    colors: [COLOR_PRIMARY_ONE, COLOR_PRIMARY_THREE],
    legend: {
      offsetY: -330,
      offsetX: 130,
      floating: true,
    },
  };

  return (
    <Holder>
      <HeaderSection>
        <Text14>Task activities</Text14>
        <span className={"icon-more-vert"} />
      </HeaderSection>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </Holder>
  );
};

export default TaskActivities;

const Holder = styled.div`
  ${CSS_CARD};
  padding: 20px;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
