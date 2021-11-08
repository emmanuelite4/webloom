import styled from "@emotion/styled";
import { CSS_CARD } from "../../../styles/shared";
import {
  Text12,
  Text13,
  Text14,
  Text18,
} from "../../../components/shared/Text/Text";
import { FC } from "react";
import { COLOR_PRIMARY_ONE } from "../../../constants/styles";

import TeamMember1 from "../../../assets/images/teams/team1.png";
import TeamMember2 from "../../../assets/images/teams/team2.png";
import TeamMember3 from "../../../assets/images/teams/team3.png";
import TeamMember4 from "../../../assets/images/teams/team4.png";

import StarBadgeIcon from "../../../assets/images/badge.svg";

type TeamProps = {
  name: string;
  role: string;
  rate: number;
  image: string;
  star: boolean;
};

const teams: TeamProps[] = [
  {
    name: "David Esoni",
    image: TeamMember1,
    rate: 9.8,
    role: "Project Manager",
    star: true,
  },
  {
    name: "Ripon Video",
    image: TeamMember2,
    rate: 9.2,
    role: "UX Designer",
    star: false,
  },
  {
    name: "Yeasmin Jeo",
    image: TeamMember3,
    rate: 9.1,
    role: "UI Designer",
    star: false,
  },
  {
    name: "Adrita Kha",
    image: TeamMember4,
    rate: 8.5,
    role: "Motion Designer",
    star: false,
  },
];

const TeamMemberPerformance = () => {
  return (
    <Holder>
      <Text14>Team Member Performance</Text14>
      {teams.map((team, index) => (
        <UserListItem
          key={team.name}
          image={team.image}
          name={team.name}
          role={team.role}
          rate={team.rate}
          star={team.star}
          border={index < teams.length - 1}
        />
      ))}
    </Holder>
  );
};

export default TeamMemberPerformance;
const Holder = styled.div`
  ${CSS_CARD};
  padding: 20px;
`;

type UserProps = {
  image: string;
  name: string;
  role: string;
  rate: number;
  border: boolean;
  star: boolean;
};

const UserListItem: FC<UserProps> = (props) => {
  const { name, image, role, rate, border, star } = props;
  return (
    <UserItemHolder>
      <UserImageWrapper>
        <UserImage src={image} alt={"Team"} />
        {star && <StarBadge src={StarBadgeIcon} alt="Star" />}
      </UserImageWrapper>
      <UserBodySection border={border}>
        <UserDetailSection>
          <Text18>{name}</Text18>
          <Text13>{role}</Text13>
        </UserDetailSection>
        <UserBadge>
          <Text12 fontWeight={600} color={COLOR_PRIMARY_ONE}>
            {rate}
          </Text12>
        </UserBadge>
      </UserBodySection>
    </UserItemHolder>
  );
};

const UserItemHolder = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const UserImageWrapper = styled.div`
  width: 58px;
  height: 58px;
  background-color: rgba(57, 84, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  position: relative;
`;

const StarBadge = styled.img`
  position: absolute;
  right: -11px;
  top: -11px;
`;

const UserImage = styled.img`
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
`;

type BodyStyleProps = {
  border: boolean;
};
const UserBodySection = styled.div`
  padding: 15px 0;
  //height: ;
  flex: 1;
  display: flex;
  align-items: center;
  border-bottom: ${(props: BodyStyleProps) =>
    props.border ? "1px solid rgba(31, 33, 39, 0.1)" : "none"};
  margin-left: 18px;
`;

const UserDetailSection = styled.div`
  flex: 1;
  & > :first-of-type {
    margin-bottom: 2px;
  }
`;

const UserBadge = styled.div`
  background: rgba(57, 84, 255, 0.06);
  border-radius: 4px;
  height: 24px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
