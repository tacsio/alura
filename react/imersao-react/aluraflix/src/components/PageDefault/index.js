import React from "react";
import styled, { css } from "styled-components";
import Footer from "../Footer";
import Menu from "../Menu";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 1%;
  ${({ paddingHorizontal }) =>
    paddingHorizontal >= 0 &&
    css`
      padding-left: ${paddingHorizontal};
      padding-right: ${paddingHorizontal};
    `}
`;

export default function PageDefault({ children, paddingHorizontal }) {
  return (
    <React.Fragment>
      <Menu />
      <Main paddingHorizontal={paddingHorizontal}>{children}</Main>
      <Footer />
    </React.Fragment>
  );
}
