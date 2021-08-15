import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaMedium } from "react-icons/fa";
import styled from "@emotion/styled";
import {
  NovaLink,
  NovaP,
  NovaA,
  NovaSpacer,
  NovaH4,
} from "../components/PageAssets.js";

const mobile = `@media (max-width: 900px)`;

const true_mobile = `@media (max-width: 400px)`;

const A = styled(NovaA)`
  margin-right: 20px;
`;
const IconLink = (props) => <A href={props.href}>{props.children}</A>;

const LinkDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 24px;
  width: 100%;
  max-width: 450px;
  ${mobile} {
    max-width: 375px;
    grid-column-gap: 16px;
  }
`;

const LinkBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: start;
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px 72px 50px;
  ${mobile} {
    padding: 24px;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 20px;
  }
  ${true_mobile} {
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 135%;
  /* identical to box height, or 27px */
  margin: 0;

  letter-spacing: 0.05em;

  color: #ffffff;

  ${mobile} {
    font-size: 14px;
  }
`;

const NavLink = styled(NovaLink)`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  color: #e5e5e5;

  ${mobile} {
    font-size: 12px;
  }
`;

const iconSize = 24;
export default function Footer() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const date = today.getDate();
  const nth = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const year = today.getFullYear();
  return (
    <>
      <NovaSpacer y={168} />
      <FooterDiv>
        <div>
          <NovaH4>
            <span style={{ fontFamily: "Alata", fontWeight: "400" }}>
              &#169;
            </span>{" "}
            2021 Nova for Good
          </NovaH4>
          <NovaSpacer y={12} />
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <IconLink href="https://www.facebook.com/novaforgood">
              <FaFacebookF size={iconSize} />
            </IconLink>
            <IconLink href="https://www.instagram.com/novaforgood/">
              <FaInstagram size={iconSize} />
            </IconLink>
            <IconLink href="https://github.com/novaforgood">
              <FaGithub size={iconSize} />
            </IconLink>
            <IconLink href="https://medium.com/novaforgood">
              <FaMedium size={iconSize} />
            </IconLink>
          </div>
          <NovaSpacer y={12} />
          <NovaP>
            {/* Last updated {month} {date}
            {nth(date)}, {year} */}
            Last updated August 15th, 2021
          </NovaP>
        </div>
        <LinkDiv>
          <LinkBox>
            <Title>General</Title>
            <NovaSpacer y={12} />
            <NavLink to="/work">Projects</NavLink>
            <NovaSpacer y={12} />
            <NavLink to="/team">Our Team</NavLink>
          </LinkBox>
          <LinkBox>
            <Title>For Students</Title>
            <NovaSpacer y={12} />
            <NavLink to="/join">Join the Team</NavLink>
          </LinkBox>
          <LinkBox>
            <Title>For Nonprofits</Title>
            <NovaSpacer y={12} />
            <NavLink target="_blank" to="https://forms.gle/g6gmjG4uYwL1AP5T9">
              Work with Us
            </NavLink>
          </LinkBox>
        </LinkDiv>
      </FooterDiv>
    </>
  );
}
