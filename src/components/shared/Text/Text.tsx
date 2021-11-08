import { COLOR_TEXT_PRIMARY } from "../../../constants/styles";
import styled from "@emotion/styled";
import { FC } from "react";
// import { h1 } from "@emotion/styled";

type Props = {
  color?: string;
  fontWeight?: number | string;
};

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

export const Text16 = styled.h6`
  font-size: 16px;
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

export const Text12 = styled.p`
  font-size: 12px;
  color: ${(props: Props) => props.color || COLOR_TEXT_PRIMARY};
  margin: 0;
  padding: 0;
  font-weight: ${(props: Props) => props.fontWeight || "400"};
`;
