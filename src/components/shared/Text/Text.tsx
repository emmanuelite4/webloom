import { COLOR_TEXT_PRIMARY } from "../../../constants/styles";
import styled from "@emotion/styled";
// import { h1 } from "@emotion/styled";

export const Text28 = styled.h1`
  font-size: 22px;
  color: ${COLOR_TEXT_PRIMARY};
  margin: 0;
  padding: 0;
`;

export const Text20 = styled.h4`
  font-size: 20px;
  color: ${(props) => props.color || COLOR_TEXT_PRIMARY};
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

export const Text18 = styled.h5`
  font-size: 18px;
  color: ${(props) => props.color || COLOR_TEXT_PRIMARY};
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

export const Text14 = styled.p`
  font-size: 14px;
  color: ${(props) => props.color || COLOR_TEXT_PRIMARY};
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

export const Text13 = styled.p`
  font-size: 13px;
  color: ${(props) => props.color || COLOR_TEXT_PRIMARY};
  margin: 0;
  padding: 0;
  font-weight: 500;
`;
