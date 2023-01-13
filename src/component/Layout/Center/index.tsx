import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface CenterProps {
  children: ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return <StyledCenter>{children}</StyledCenter>;
};

export default Center;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
