import styled from "@emotion/styled";
import { CSS_CARD } from "../../../styles/shared";
import { Text14 } from "../../../components/shared/Text/Text";
import ReactApexChart from "react-apexcharts";
import { COLOR_PRIMARY_ONE } from "../../../constants/styles";

const TeamActivities = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: { enabled: !1 },
    // stroke: { curve: "smooth", width: 2 },
    markers: { size: 0, strokeWidth: 2, style: "hollow" },

    colors: [COLOR_PRIMARY_ONE],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    },
  };
  const series = [{ data: [18, 30, 22, 40, 32, 39] }];
  return (
    <Holder>
      <HeaderSection>
        <Text14>Team activities</Text14>
        <span className={"icon-more-vert"} />
      </HeaderSection>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={240}
      />
    </Holder>
  );
};

export default TeamActivities;

const Holder = styled.div`
  ${CSS_CARD};
  padding: 20px;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
