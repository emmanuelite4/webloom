import styled, { StyledComponent } from "@emotion/styled";
import { Text18 } from "../shared/Text/Text";
import { FC } from "react";
import { COLOR_PRIMARY_ONE } from "../../constants/styles";
import { Theme } from "@emotion/react";

type Props = {
  title: string;
  onClick?: () => void;
};

const SideBarListItem: FC<Props> = ({ title, onClick }) => {
  const active = true;
  const color = active ? COLOR_PRIMARY_ONE : "";
  return (
    <Holder active={active}>
      {active && <BorderLeft />}
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
  align-items: center;
  justify-content: center;
  color: rgba(31, 33, 39, 0.6);
  cursor: pointer;
  background-color: ${(props: ActiveProps) =>
    props.active ? "rgba(57, 84, 255, 0.05)" : "transparent"};
  &:hover {
    background-color: rgba(57, 84, 255, 0.05);
  }
`;

const BorderLeft = styled.div`
  background-color: ${COLOR_PRIMARY_ONE};
  position: absolute;
  left: 0;
  width: 5px;
  height: 62px;
`;
