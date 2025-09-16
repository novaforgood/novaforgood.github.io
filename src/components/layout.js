import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "@emotion/styled";

const mobile = `@media (max-width: 800px)`;

// container unchanged
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
`;

// don't forward the `home` prop to the DOM
const ContentWrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "home",
})`
  /* If home, no padding. Otherwise, add space for the floating header */
  padding-top: ${({ home }) => (home ? "0" : "clamp(5rem, 8vw, 6.5rem)")};

  ${mobile} {
    padding-top: ${({ home }) => (home ? "0" : "4.5rem")};
  }
`;

export default function Layout({ home = false, children }) {
  return (
    <Container>
      <Header />
      <ContentWrap home={home}>{children}</ContentWrap>
      <Footer />
    </Container>
  );
}
