import { FC } from "react";
import { Text20 } from "../shared/Text/Text";
import { URL_DASHBOARD, URL_TEAM } from "../../constants/navigations";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import User from "../../assets/images/avatar.png";

type Props = {
  toggleMenu: () => void;
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
  const { toggleMenu } = props;
  return (
    <Holder>
      <TitleWrapper>
        <span className={"icon-menu"} onClick={toggleMenu} />
        <Text20>{title(location.pathname)}</Text20>
      </TitleWrapper>
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

  @media (max-width: 991.99px) {
    padding: 15px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  & > :first-of-type {
    display: none;
  }
  @media (max-width: 991.99px) {
    & > :first-of-type {
      display: block;
      margin-right: 10px;
    }
  }
`;

const BodySection = styled.div`
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-left: 40px;
  }
  @media (max-width: 991.99px) {
    & > :not(:last-child) {
      margin-left: 20px;
    }
  }
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  margin-right: 10px;
`;
