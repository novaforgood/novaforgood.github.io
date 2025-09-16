import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import logo from "../assets/logo.svg";
import { SparklyButton } from "./PageAssets";

const mobile = `@media (max-width: 800px)`;

/* ===== Floating shell ===== */
const FloatShell = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  inset-inline: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

/* ===== Glassy pill ===== */
const Bar = styled.nav`
  pointer-events: auto;
  margin-top: 2rem;
  height: 3rem;
  width: min(92vw, 58rem);
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  border: 1px solid rgba(0, 0, 0);
  border-radius: 100px;
  background: rgba(255, 255, 255);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);

  ${mobile} {
    margin-top: 1rem;
    background: transparent;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    box-shadow: none;
    width: calc(100% - 16px);
  }
`;

/* Left group: logo + nav links */
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem; /* space between logo and first link */
`;

/* Right group: CTA button only */
const RightGroup = styled.div`
  display: flex;
  align-items: right;

  ${mobile} {
    display: none; /* hide CTA on mobile like before */
  }
`;

const Spacer = styled.div`
  flex: 1; /* pushes right group to far right */
`;

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
`;

const LogoImg = styled.img`
  height: 2.5rem;
  width: auto;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${mobile} {
    display: none; /* hide links on mobile (same behavior as before) */
  }
`;

/* Gradient-hover nav links (unchanged from your version) */
export const NavLink = styled(Link)`
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );
  --active-underline: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );

  font-family: "InstrumentSans", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  /*text-transform: uppercase;*/
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  text-decoration: none;
  color: black;
  position: relative;
  transition: color 200ms ease, opacity 200ms ease;

  &:hover {
    opacity: 0.85;
  }

  &:hover,
  &:focus-visible {
    opacity: 1;
    outline: none;
  }
  @supports (-webkit-background-clip: text) or (background-clip: text) {
    &:hover,
    &:focus-visible {
      background: var(--grad);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    height: 2px;
    border-radius: 2px;
    background: transparent;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 200ms ease, background 200ms ease, opacity 200ms ease;
  }
  &:hover::after,
  &:focus-visible::after {
    background: var(--grad);
    transform: scaleX(1);
  }
  &.active::after {
    background: var(--active-underline);
    transform: scaleX(1);
  }
`;

/* CTA button styling */
const NavButton = styled(SparklyButton)`
  height: 2.25rem;
  padding: 0 18px;
  border-radius: 9999px;
  font-size: 0.9rem;
`;

export default function Header() {
  return (
    <FloatShell>
      <Bar>
        {/* LEFT: logo + links */}
        <LeftGroup>
          <LogoLink to="/">
            <LogoImg src={logo} alt="Nova Logo" />
          </LogoLink>
          <Nav>
            <NavLink to="/about" activeClassName="active">
              about
            </NavLink>
            <NavLink to="/work" activeClassName="active">
              work
            </NavLink>
            <NavLink to="/team" activeClassName="active">
              our team
            </NavLink>
            <NavLink to="/join" activeClassName="active">
              for students
            </NavLink>
          </Nav>
        </LeftGroup>

        {/* push CTA to the far right */}
        <Spacer />

        {/* RIGHT: CTA */}
        <RightGroup>
          <NavButton
            to="https://forms.gle/g6gmjG4uYwL1AP5T9"
            target="_blank"
            rel="noreferrer"
            textColor="#ffffff"
            backgroundColor="#C95981"
            borderColor="#C95981"
          >
            Work with us
          </NavButton>
        </RightGroup>
      </Bar>
    </FloatShell>
  );
}
