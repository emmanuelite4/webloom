import { COLOR_TEXT_PRIMARY } from "../../../constants/styles";
import styled from "@emotion/styled";
// import { h1 } from "@emotion/styled";

export const Text28 = styled.h1`
  font-size: 22px;
  color: ${COLOR_TEXT_PRIMARY};
`;

export const Text18 = styled.h3`
  font-size: 18px;
  color: ${(props) => props.color || COLOR_TEXT_PRIMARY};
`;
