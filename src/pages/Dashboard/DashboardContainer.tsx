import { FC } from "react";
import StatsCard from "./components/StatsCard";
import {
  COLOR_PRIMARY_FOUR,
  COLOR_PRIMARY_ONE,
  COLOR_PRIMARY_THREE,
  COLOR_PRIMARY_TWO,
} from "../../constants/styles";
import styled from "@emotion/styled";
import TaskActivities from "./components/TaskActivities";

type StatsProps = {
  title: string;
  color: string;
  percentage: number;
  total: number;
};

const stats_data: StatsProps[] = [
  { title: "Works", color: COLOR_PRIMARY_THREE, percentage: 50, total: 75 },
  { title: "Analytics", color: COLOR_PRIMARY_FOUR, percentage: 25, total: 310 },
  { title: "Statics", color: COLOR_PRIMARY_ONE, percentage: 59, total: 75 },
  { title: "Tasks", color: COLOR_PRIMARY_TWO, percentage: 75, total: 15 },
];

const DashboardContainer: FC = () => {
  return (
    <Holder>
      <FirstSection>
        <StatsSection>
          {stats_data.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </StatsSection>
        <TaskActivities />
      </FirstSection>
    </Holder>
  );
};

export default DashboardContainer;

const Holder = styled.div`
  padding: 35px;
`;

const FirstSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;
