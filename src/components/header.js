import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import logo from "../assets/logo.svg";

const mobile = `@media (max-width: 800px)`;

/* ===================== DESKTOP (unchanged behavior) ===================== */

const DesktopOnly = styled.div`
  display: flex;
  ${mobile} {
    display: none;
  }
`;

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
  height: 4rem;
  width: min(92vw, 58rem);
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 100px;
  background: #fff;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const Spacer = styled.div`
  flex: 1;
`;
const RightGroup = styled.div`
  display: flex;
  align-items: center;
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
`;
export const NavLink = styled(Link)`
  font-family: "InstrumentSans", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;
  color: #000;
  text-decoration: none;
  position: relative;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.85;
  }
`;

const NavButton = styled(Link)`
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 12px 12px;
  border: 1.5px solid #000;
  border-radius: 9999px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font: 500 16px InstrumentSans;
  transition: background 0.18s, color 0.18s, transform 0.18s, border-color 0.18s;
  &:hover {
    background: var(--grad);
    color: #fff;
    border-color: transparent;
  }
`;

/* ===================== MOBILE (new static header + menu) ===================== */

const MobileOnly = styled.header`
  display: none;
  ${mobile} {
    display: block;
    position: relative;
    z-index: 1000;
    width: 100%;
  }
`;

const MobileBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const Burger = styled.button`
  --bar: 2px;
  width: 36px;
  height: 28px;
  position: relative;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  &::before,
  &::after,
  span {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: var(--bar);
    background: #000;
    border-radius: 1px;
    transition: transform 0.2s, opacity 0.2s;
  }
  &::before {
    top: 4px;
  }
  &::after {
    bottom: 4px;
  }
  span {
    top: 50%;
    transform: translateY(-50%);
  }

  &[data-open="true"]::before {
    transform: translateY(10px) rotate(45deg);
  }
  &[data-open="true"]::after {
    transform: translateY(-10px) rotate(-45deg);
  }
  &[data-open="true"] span {
    opacity: 0;
  }
`;

const MobileMenu = styled("nav", {
  shouldForwardProp: (p) => p !== "$open",
})`
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? "320px" : "0")};
  transition: max-height 0.25s ease;
`;

const MobileMenuInner = styled.div`
  display: grid;
  gap: 8px;
  padding: 12px 16px 16px;
`;

const MobileLink = styled(Link)`
  display: block;
  padding: 10px 4px;
  color: #000;
  text-decoration: none;
  font: 500 18px InstrumentSans;
`;

const MobileCTA = styled(Link)`
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: 1.5px solid #000;
  border-radius: 9999px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font: 600 16px InstrumentSans;
  margin-top: 8px;
  &:hover {
    background: var(--grad);
    border-color: transparent;
  }
`;

/* ===================== COMPONENT ===================== */

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop floating header */}
      <DesktopOnly>
        <FloatShell>
          <Bar>
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
            <Spacer />
            <RightGroup>
              <NavButton to="/contact">Contact Us</NavButton>
            </RightGroup>
          </Bar>
        </FloatShell>
      </DesktopOnly>

      {/* Mobile static header with hamburger */}
      <MobileOnly>
        <MobileBar>
          <LogoLink to="/">
            <LogoImg src={logo} alt="Nova Logo" />
          </LogoLink>
          <Burger
            aria-label="Open navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            data-open={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </Burger>
        </MobileBar>

        <MobileMenu id="mobile-menu" $open={open}>
          <MobileMenuInner>
            <MobileLink to="/about" onClick={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileLink to="/work" onClick={() => setOpen(false)}>
              Work
            </MobileLink>
            <MobileLink to="/team" onClick={() => setOpen(false)}>
              Our Team
            </MobileLink>
            <MobileLink to="/join" onClick={() => setOpen(false)}>
              For Students
            </MobileLink>
            <MobileCTA to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </MobileCTA>
          </MobileMenuInner>
        </MobileMenu>
      </MobileOnly>
    </>
  );
}
