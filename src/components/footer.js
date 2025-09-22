import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import logowhite from "../assets/logowhite.svg";

const mobile = `@media (max-width: 900px)`;

/* Gradient backdrop */
const FooterWrap = styled.footer`
  background: linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%);
  color: #fff;
`;

/* Centered max-width container */
const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 56px) clamp(16px, 4vw, 32px);
`;

/* Two columns: brand (centered) on left, nav/socials right */
const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: clamp(16px, 3vw, 40px);

  ${mobile} {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 24px;
  }
`;

/* Brand block */
const Brand = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 16px;
  row-gap: 6px;

  ${mobile} {
    justify-items: center;
    grid-template-columns: auto 1fr;
  }
`;

const BrandLogo = styled.img`
  width: clamp(36px, 5vw, 56px);
  height: auto;
  grid-row: span 2;
`;

const BrandTitle = styled.h1`
  margin: 0;
  font-family: "Unbounded", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #fff;
  font-size: clamp(22px, 4.4vw, 40px);
  line-height: 1.1;
  text-align: center;

  ${mobile} {
    grid-column: 1 / -1;
  }
`;

const SubLine = styled.p`
  margin: 0;
  color: #ffffff;
  opacity: 0.95;
  font-family: InstrumentSans, system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: clamp(12px, 1.6vw, 16px);
  text-align: center;

  a {
    color: #ffffff;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  ${mobile} {
    grid-column: 1 / -1;
  }
`;

/* Right column: nav links and social icons */
const RightCol = styled.div`
  display: grid;
  gap: 16px;
  justify-items: end;

  ${mobile} {
    justify-items: center;
  }
`;

const NavList = styled.nav`
  display: flex;
  gap: clamp(16px, 3vw, 32px);
  flex-wrap: wrap;
`;

const NavItem = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: InstrumentSans, system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: clamp(14px, 1.8vw, 18px);
  letter-spacing: 0.01em;
  transition: opacity 160ms ease;

  &:hover,
  &:focus-visible {
    opacity: 0.85;
    outline: none;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialCircle = styled.a`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #ffffff;
  color: #6dbff2; /* icon color */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  transition: transform 160ms ease, box-shadow 160ms ease, color 160ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
    color: #b78df2;
  }
`;

export default function Footer() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  return (
    <FooterWrap>
      <Inner>
        <TopGrid>
          {/* Brand left/center */}
          <Brand>
            <BrandLogo src={logowhite} alt="Nova logo" />
            <BrandTitle>Nova, Tech for Good</BrandTitle>
            <SubLine>
              <a href="mailto:hello@novaforgood.org">hello@novaforgood.org</a> |
              Last updated {month}, {year}
            </SubLine>
          </Brand>

          {/* Nav + socials right */}
          <RightCol>
            <NavList aria-label="Footer navigation">
              <NavItem to="/about">About</NavItem>
              <NavItem to="/work">Work</NavItem>
              <NavItem to="/team">Our Team</NavItem>
              <NavItem to="/join">For Students</NavItem>

              <NavItem to="/contact">Contact</NavItem>
            </NavList>

            <Socials>
              <SocialCircle
                href="https://www.facebook.com/novaforgood"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </SocialCircle>
              <SocialCircle
                href="https://www.instagram.com/novaforgood/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </SocialCircle>
              <SocialCircle
                href="https://github.com/novaforgood"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </SocialCircle>
            </Socials>
          </RightCol>
        </TopGrid>
      </Inner>
    </FooterWrap>
  );
}
