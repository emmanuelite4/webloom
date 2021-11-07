import { FC } from "react";
import StatsCard from "./components/StatsCard";
import { COLOR_PRIMARY_ONE } from "../../constants/styles";
import styled from "@emotion/styled";

const DashboardContainer: FC = () => {
  return (
    <Holder>
      <FirstSection>
        <StatsSection>
          <StatsCard
            title={"Works"}
            color={COLOR_PRIMARY_ONE}
            percentage={50}
            total={75}
          />
          <StatsCard
            title={"Works"}
            color={COLOR_PRIMARY_ONE}
            percentage={50}
            total={75}
          />
          <StatsCard
            title={"Works"}
            color={COLOR_PRIMARY_ONE}
            percentage={50}
            total={75}
          />
          <StatsCard
            title={"Works"}
            color={COLOR_PRIMARY_ONE}
            percentage={50}
            total={75}
          />
        </StatsSection>
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
