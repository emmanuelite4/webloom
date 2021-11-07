import styled, { StyledComponent } from "@emotion/styled";
import { Text18 } from "../shared/Text/Text";
import { FC } from "react";
import { COLOR_PRIMARY_ONE, COLOR_TEXT_PRIMARY } from "../../constants/styles";
import { Theme } from "@emotion/react";

type Props = {
  title: string;
  onClick?: () => void;
  icon: string;
};

const SideBarListItem: FC<Props> = ({ title, icon, onClick }) => {
  const active = true;
  const color = active ? COLOR_PRIMARY_ONE : "";
  return (
    <Holder active={active}>
      {active && <BorderLeft />}
      <IconWrapper>
        <span className={`icon-${icon}`} />
      </IconWrapper>
      <Text18 color={color}>{title}</Text18>
    </Holder>
  );
};

export default SideBarListItem;

type ActiveProps = {
  active: true;
};

const Holder = styled.div`
  position: relative;
  height: 62px;
  display: flex;
  padding-left: 40px;
  align-items: center;
  color: rgba(31, 33, 39, 0.6);
  cursor: pointer;
  background-color: ${(props: ActiveProps) =>
    props.active ? "rgba(57, 84, 255, 0.05)" : "transparent"};
  color: ${(props: ActiveProps) =>
    props.active ? COLOR_PRIMARY_ONE : "rgba(31, 33, 39, 0.6)"};
  &:hover {
    background-color: rgba(57, 84, 255, 0.05);
  }

  & > :last-child {
    flex: 1;
  }
`;

const BorderLeft = styled.div`
  background-color: ${COLOR_PRIMARY_ONE};
  position: absolute;
  left: 0;
  width: 5px;
  height: 62px;
`;

const IconWrapper = styled.div`
  margin-right: 20px;
`;
