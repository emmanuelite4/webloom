import styled from "@emotion/styled";
import { CSS_CARD } from "../../../styles/shared";
import { FC } from "react";
import { Text13, Text14, Text20 } from "../../../components/shared/Text/Text";
import { COLOR_PRIMARY_ONE } from "../../../constants/styles";

type Props = {
  image: string;
  name: string;
  email: string;
  role: string;
};

const TeamCard: FC<Props> = (props) => {
  const { image, name, email, role } = props;
  return (
    <Holder>
      <MainSection>
        <span
          className={"icon-more-vert"}
          style={{ textAlign: "right", display: "block" }}
        />
        <Image src={image} />
        <Text20>{name}</Text20>
        <Text14>{email}</Text14>
      </MainSection>
      <RoleSection>
        <Text13 color={COLOR_PRIMARY_ONE}>{role}</Text13>
      </RoleSection>
    </Holder>
  );
};

export default TeamCard;

const Holder = styled.div`
  ${CSS_CARD};
  overflow: hidden;
`;

const MainSection = styled.div`
  padding: 15px;
  text-align: center;

  & > :last-child {
    margin-top: 3px;
    color: rgba(31, 33, 39, 0.7);
  }
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 25px;
  border: 4px solid rgba(57, 84, 255, 0.04);
  margin-top: 15px;
  margin-bottom: 20px;
`;

const RoleSection = styled.div`
  background: rgba(57, 84, 255, 0.03);
  padding: 25px;
  text-align: center;
  text-transform: uppercase;
`;
