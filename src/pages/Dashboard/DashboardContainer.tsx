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
import TeamActivities from "./components/TeamActivities";
import TeamMemberPerformance from "./components/TeamMemberPerformance";

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
      <SecondSection>
        <TeamActivities />
        <TeamMemberPerformance />
      </SecondSection>
    </Holder>
  );
};

export default DashboardContainer;

const Holder = styled.div`
  padding: 35px;
  @media (max-width: 991.99px) {
    padding: 15px;
  }
`;

const FirstSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 991.99px) {
    grid-template-columns: 1fr;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const SecondSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  @media (max-width: 991.99px) {
    grid-template-columns: 1fr;
  }
`;
