import styled from "@emotion/styled";
import { CSS_CARD } from "../../../styles/shared";
import Logo from "../../../assets/images/nxt_uxui.png";
import {
  Text12,
  Text14,
  Text20,
  Text28,
} from "../../../components/shared/Text/Text";
import ProjectActivityChart from "./ProjectActivityChart";
import TeamLeadImage from "../../../assets/images/teams/team_lead.png";
import { css } from "@emotion/react";
import PopulationChart from "./PopulationChart";

const Organization = () => {
  return (
    <Holder>
      <HeadSection>
        <LogoImage src={Logo} alt={"NXT_UXUI"} />
        <Text28>Nxt_UXUI</Text28>
        <DetailSection>
          <Text14 color={"rgba(31, 33, 39, 0.58)"}>A designer team</Text14>
          <Text12 color={"rgba(31, 33, 39, 0.58)"}>nxt.uxui@gmail.com</Text12>
        </DetailSection>
      </HeadSection>
      <BodySection>
        <span
          className={"icon-configuration"}
          style={{
            display: "block",
            textAlign: "right",
            color: "rgba(31, 33, 39, 0.7)",
          }}
        />
        <ChartContainer>
          <span className={"icon-arrow-left"} />
          <ProjectActivityChart />
          <span className={"icon-arrow-right"} />
        </ChartContainer>
        <TeamLeadContainer>
          <TeamLeadImg src={TeamLeadImage} alt={"Alina Endorson"} />
          <TeamLeadDetail>
            <Text20>Alina Endorson</Text20>
            <Text12>CEO and Team Leader</Text12>
          </TeamLeadDetail>
        </TeamLeadContainer>
        <TeamMemberContainer>
          <Text14>Total Team Member</Text14>
          <PopulationChartWrapper>
            <TotalTeamMemberText>25</TotalTeamMemberText>
            <PopulationChart />
          </PopulationChartWrapper>
        </TeamMemberContainer>
      </BodySection>
    </Holder>
  );
};

export default Organization;

const Holder = styled.div`
  ${CSS_CARD};
`;

const HeadSection = styled.div`
  padding-top: 50px;
  padding-bottom: 35px;
  text-align: center;
  border-bottom: 1px solid rgba(31, 33, 39, 0.1);
`;

const LogoImage = styled.img`
  margin-bottom: 12px;
`;

const DetailSection = styled.div`
  margin-top: 7px;
  & > :first-child {
    margin-bottom: 3px;
  }
`;

const BodySection = styled.div`
  padding: 20px;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const CSS_SECONDARY_CARD = css`
  background: rgba(57, 84, 255, 0.05);
  border-radius: 12px;
`;

const TeamLeadContainer = styled.div`
  ${CSS_SECONDARY_CARD};
  display: flex;
  padding: 20px;
  align-items: center;
`;
const TeamLeadImg = styled.img`
  width: 68px;
  height: 68px;
  border-right: 1px;
`;

const TeamLeadDetail = styled.div`
  flex: 1;
  margin-left: 15px;
  & > :first-child {
    margin-bottom: 5px;
  }
`;

const TeamMemberContainer = styled.div`
  ${CSS_SECONDARY_CARD};
  margin-top: 20px;
  padding-top: 23px;
  padding-right: 0px;
  padding-left: 23px;
  padding-bottom: 10px;
`;

const PopulationChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const TotalTeamMemberText = styled.h1`
  font-size: 33px;
  margin: 0;
  padding: 0;
`;
