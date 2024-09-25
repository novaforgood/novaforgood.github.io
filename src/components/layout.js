import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import styled from "@emotion/styled";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: black;
`;
export default function Layout({ home, children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
