import styled from "@emotion/styled";
import { COLOR_BACKGROUND_TWO } from "../../constants/styles";
import Logo from "../../assets/images/logo.svg";
import { Text28 } from "../shared/Text/Text";
import SideBarListItem from "./SideBarListItem";
import Button from "../shared/Button/Button";
import { menus } from "../../constants/side-menu";
import { FC } from "react";
import { keyframes } from "@emotion/react";

type Props = {
  smShow: boolean;
  toggleMenu: () => void;
};

const SideBar: FC<Props> = (props) => {
  const { smShow, toggleMenu } = props;
  return (
    <>
      <Holder smShow={smShow}>
        <HeaderSection>
          <LogoImage src={Logo} alt={"Only1"} />
          <Text28>ONLY1</Text28>
        </HeaderSection>
        <BodySection>
          {menus.map((menu) => (
            <SideBarListItem
              key={menu.path}
              title={menu.title}
              icon={menu.icon}
              path={menu.path}
              onClick={toggleMenu}
            />
          ))}
        </BodySection>
        <Button icon={<span className="icon-logout" />}>Logout</Button>
      </Holder>
      <Backdrop onClick={toggleMenu} smShow={smShow} />
    </>
  );
};

export default SideBar;

type HolderProps = {
  smShow: boolean;
};

const slideIn = keyframes`
  from{
    left: -320px
  } to {
    left:0
    }
`;
const Holder = styled.div`
  width: 224px;
  background-color: ${COLOR_BACKGROUND_TWO};
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991.99px) {
    display: ${(props: HolderProps) => (props.smShow ? "flex" : "none")};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 320px;
    animation: ${slideIn} 0.5s forwards;
  }
`;

type BackdropProps = {
  smShow: boolean;
  onClick: () => void;
};

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 9;
  display: none;
  @media (max-width: 991.99px) {
    display: ${(props: BackdropProps) => (props.smShow ? "block" : "none")};
  } ;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  margin-right: 13px;
`;

const BodySection = styled.div`
  flex: 1;
  align-self: stretch;
  margin-top: 60px;
`;
