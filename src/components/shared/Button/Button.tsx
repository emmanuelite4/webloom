import styled from "@emotion/styled";
import { FC, HTMLProps, ReactNode } from "react";
import { COLOR_PRIMARY_ONE, COLOR_WHITE } from "../../../constants/styles";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  icon?: ReactNode;
  children: ReactNode;
  others?: HTMLProps<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  const { icon, children, ...others } = props;
  return (
    <ButtonHolder {...others}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </ButtonHolder>
  );
};

export default Button;

const ButtonHolder: FC = styled.button`
  display: flex;
  align-items: center;
  background-color: ${COLOR_PRIMARY_ONE};
  height: 45px;
  border-radius: 8px;
  padding: 12px 17px;
  outline: none;
  border: none;
  color: ${COLOR_WHITE};
  font-size: 18px;
  font-weight: 500;
`;

const IconWrapper: FC = styled.div`
  margin-right: 10px;
`;
