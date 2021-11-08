import styled from "@emotion/styled";
import { Text16, Text12, Text14 } from "../../components/shared/Text/Text";
import { teams } from "../../data";
import TeamCard from "./components/TeamCard";
import Organization from "./components/Organization";

const TeamContainer = () => {
  return (
    <Holder>
      <ColumnOne>
        <HeadSection>
          <Text16>Team Members</Text16>
          <FilterSection>
            <Text12>Sort by:</Text12>
            <Text14>All</Text14>
            <span className={"icon-arrow-down"} />
          </FilterSection>
        </HeadSection>
        <TeamList>
          {teams.map((team, index) => (
            <TeamCard
              key={team.email + index}
              image={team.image}
              name={team.name}
              email={team.email}
              role={team.role}
            />
          ))}
        </TeamList>
      </ColumnOne>
      <Organization />
    </Holder>
  );
};

export default TeamContainer;

const Holder = styled.div`
  padding: 35px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 26px;
  align-items: flex-start;

  @media (max-width: 991.99px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }
`;

const ColumnOne = styled.div`
  border-top: 1px solid rgba(31, 33, 39, 0.1);
  padding-top: 30px;
`;

const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  & > :nth-of-type(2) {
    margin-left: 10px;
  }
`;

const TeamList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 26px;

  @media (max-width: 991.99px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;
