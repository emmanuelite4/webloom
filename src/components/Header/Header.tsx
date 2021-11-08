import { FC } from "react";
import { Text20 } from "../shared/Text/Text";
import { URL_DASHBOARD, URL_TEAM } from "../../constants/navigations";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import User from "../../assets/images/avatar.png";

type Props = {
  // title?: string;
};

const title = (value: string) => {
  switch (value) {
    case URL_DASHBOARD:
      return "Dashboard";
    case URL_TEAM:
      return "My Team";
    default:
      return "Dashboard";
  }
};

const Header: FC<Props> = (props) => {
  const location = useLocation();
  return (
    <Holder>
      <Text20>{title(location.pathname)}</Text20>
      <BodySection>
        <span className={"icon-search"} />
        <span className={"icon-notification"} />
        <Avatar src={User} alt={"User"} />
        <span className={"icon-arrow-down"} />
      </BodySection>
    </Holder>
  );
};
export default Header;

const Holder = styled.div`
  padding-top: 50px;
  padding-right: 35px;
  padding-left: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodySection = styled.div`
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-left: 40px;
  }
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  margin-right: 10px;
`;
