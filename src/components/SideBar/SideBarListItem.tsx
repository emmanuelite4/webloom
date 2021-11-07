import styled from "@emotion/styled";
import { Text18 } from "../shared/Text/Text";
import { FC } from "react";
import { COLOR_PRIMARY_ONE } from "../../constants/styles";
import { Link, useLocation } from "react-router-dom";

type Props = {
  title: string;
  icon: string;
  path: string;
};

const SideBarListItem: FC<Props> = ({ title, icon, path }) => {
  const location = useLocation();
  const active: boolean = location.pathname === path;
  const color = active ? COLOR_PRIMARY_ONE : "";
  return (
    <Holder active={active} to={path}>
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
  active: boolean;
};

const Holder = styled(Link)`
  position: relative;
  height: 62px;
  display: flex;
  padding-left: 40px;
  align-items: center;
  cursor: pointer;
  background-color: ${(props: ActiveProps) =>
    props.active ? "rgba(57, 84, 255, 0.05)" : "transparent"};
  color: ${(props: ActiveProps) =>
    props.active ? COLOR_PRIMARY_ONE : "rgba(31, 33, 39, 0.6)"};
  text-decoration: none !important;
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
