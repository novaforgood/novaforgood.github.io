import React from "react";
import { Link } from "gatsby";
import logo from "../assets/logo.svg";
import "../styles/global.css";
import styled from "@emotion/styled";
import { NovaP, NovaA, SparklyButton } from "./PageAssets";
import { FaInfoCircle } from "react-icons/fa";

const mobile = `@media (max-width: 800px)`;

const DesktopView = styled("div")`
  ${mobile} {
    display: none;
  }
`;

const Callout = styled.div`
  background: #282547;
`;

const CalloutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalloutP = styled(NovaP)`
  margin: 5px 20px;
  font-size: 14px;
  ${mobile} {
    font-size: 10px;
  }
`;

const DESKTOP_SIZE = 70;
const MOBILE_SIZE = 40;

const LogoDiv = styled.div`
  transform: rotate(45deg);
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari and Chrome */
  padding: 0;
  border-radius: 35%;

  transition-duration: 0.3s;

  /* &:hover {
    background: white;
    box-shadow: 0 0 3px 3px #ffffff;
  } */

  width: ${DESKTOP_SIZE}px;
  height: ${DESKTOP_SIZE}px;
  ${mobile} {
    height: ${MOBILE_SIZE}px;
    width: ${MOBILE_SIZE}px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

const Logo = styled.img`
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  width: 80%;
  margin: 0;
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 48px 64px 0px 64px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0);

  ${mobile} {
    padding: 10px;
    padding-top: 20px;
  }
`;

const NavLink = styled(Link)`
  font-family: "Space Mono";
  text-transform: uppercase;s
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  margin-right: 20px;
  /* identical to box height, or 32px */

  text-decoration: none;
  color: black;s
  position: relative;

  /*&::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    visibility: visible;
    width: 100%;
  }

  
  &.active {
    &.active::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: black;
        }
}*/

    /*
    &:hover {
        border-bottom: 3px solid #00A0FF;
        margin-bottom: -4px;
    }
    */

  ${mobile} {
    font-size: 16px;
    margin-right: 5px;
  }
`;

const NavButton = styled(SparklyButton)`
  background-color: black;
  border-color: black;
  color: white;
  font-family: "Space Mono";
`;

export default function Header() {
  //   const [spacerHeight, setSpacerHeight] = useState(0)
  //   const [scrolled, setScrolled] = useState(false)
  //   const handleScroll = () => {
  //     const offset = window.scrollY
  //     var limit = document.getElementById("callout").offsetHeight
  //     if (offset > limit) {
  //       setScrolled(true)
  //       var height = document.getElementById("navbar").offsetHeight
  //       setSpacerHeight(height)
  //     } else {
  //       setScrolled(false)
  //       //   setSpacerHeight(0)
  //     }
  //   }
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll)
  //   })

  return (
    <React.Fragment>
      {/* <a id="top">
        <Callout id="callout">
          <CalloutDiv>
            <DesktopView>
              <FaInfoCircle size={12} />
            </DesktopView>
            <CalloutP>
              Due to COVID-19, Nova has gone remote. We're still hard at work on
              projects, so{" "}<NovaA
                href="https://forms.gle/g6gmjG4uYwL1AP5T9">
              contact us</NovaA>!
            </CalloutP>
          </CalloutDiv>
        </Callout>
      </a> */}
      <NavDiv id="navbar">
        <LogoDiv>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
        </LogoDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* <NavLink
            activeClassName="active"
            style={{ marginLeft: "14px" }}
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            activeClassName="active"
            style={{ marginLeft: "14px" }}
            to="/work"
          >
            work
          </NavLink>
          <NavLink
            activeClassName="active"
            style={{ marginLeft: "14px" }}
            to="/team"
          >
            our team
          </NavLink> */}
          <NavLink
            activeClassName="active"
            style={{ marginLeft: "24px" }}
            to="/join"
          >
            join
          </NavLink>
          <DesktopView>
            <NavButton
              style={{ marginLeft: "24px" }}
              rel="noreferrer"
              target="_blank"
              to="https://forms.gle/g6gmjG4uYwL1AP5T9"
              textColor="#ffffff"
              backgroundColor="#C95981"
              borderColor="#C95981"
              disappear
              padding="8px 30px"
              borderRadius="4px"
            >
              work with us
            </NavButton>
          </DesktopView>
        </div>
      </NavDiv>
    </React.Fragment>
  );
}
