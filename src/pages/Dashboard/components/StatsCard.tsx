import styled from "@emotion/styled";
import { CSS_CARD } from "../../../styles/shared";
import { FC } from "react";
import { Text13, Text14, Text20 } from "../../../components/shared/Text/Text";
import ReactApexChart from "react-apexcharts";
import { COLOR_PRIMARY_ONE } from "../../../constants/styles";

type Props = {
  title: string;
  percentage: number;
  total: number;
  color: string;
};

const StatsCard: FC<Props> = (props) => {
  const { title, total, color, percentage } = props;

  const percentageString = `${percentage}%`;

  const options = {
    chart: { sparkline: { enabled: !0 } },
    dataLabels: { enabled: !1 },
    plotOptions: {
      radialBar: {
        background: COLOR_PRIMARY_ONE,
        hollow: {
          size: "80%",
          margin: 0,
        },
        track: { margin: 0 },
        dataLabels: {
          name: {
            offsetY: 5,
            show: true,
            color: color,
            fontSize: "11px",
          },
          value: {
            show: false,
          },
        },
      },

      total: {
        backgroundColor: "green",
      },
    },
    colors: [color],

    labels: [percentageString],
  };

  return (
    <Holder>
      <HeadSection>
        <Text14>{title}</Text14>
        <span className="icon-more-vert" />
      </HeadSection>
      <BodySection>
        <div style={{ minHeight: 10 }}>
          <ReactApexChart
            options={options}
            series={[percentage]}
            type="radialBar"
            height={70}
            width={70}
          />
        </div>
        <TextSection>
          <Text20>{total}</Text20>
          <Text13 color={"rgba(31, 33, 39, 0.7)"}>{title} Today</Text13>
        </TextSection>
      </BodySection>
    </Holder>
  );
};

export default StatsCard;

const Holder = styled.div`
  ${CSS_CARD};
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const TextSection = styled.div`
  text-align: right;
`;
