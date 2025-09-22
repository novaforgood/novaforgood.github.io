import React from "react";
import coloredstars from "../assets/coloredstars.svg";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const mobile = `@media (max-width: 800px)`;

const ColoredStars = styled.div`
  position: absolute;
  z-index: 2; /* under spotlight + text */
  left: 10%;
  top: 20%; /* your offset */
  width: 80%;
  height: 90%;
  pointer-events: none;

  /* stars image */
  background: url(${coloredstars}) center / contain no-repeat;

  @media (max-width: 800px) {
    /* smaller, slightly lower on mobile (tweak to taste) */
  }
`;

const Wrap = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(48px, 8vw, 96px) clamp(16px, 4vw, 24px);
`;

const Title = styled.h1`
  font-family: "Unbounded", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-weight: 900;
  font-size: clamp(48px, 12vw, 120px);
  line-height: 0.9;
  margin: 0;
  letter-spacing: -0.02em;
  color: #000;
`;

const Sub = styled.p`
  margin: clamp(16px, 2vw, 24px) 0 0;
  text-align: left;
  margin-left: 0;
  margin-right: auto;
  max-width: 820px;
  font-family: InstrumentSans, system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: clamp(16px, 2.2vw, 22px);
  line-height: 1.5;
  color: #000;

  a {
    color: #000;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  @media (max-width: 800px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: clamp(16px, 3vw, 28px);
  align-items: center;
  margin-top: clamp(28px, 4vw, 40px);
`;

const SocialCircle = styled.a`
  width: clamp(54px, 9vw, 72px);
  height: clamp(54px, 9vw, 72px);
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 2px solid #000;
  color: #000;
  background: #fff;
  transition: transform 160ms ease, background 160ms ease, color 160ms ease,
    border-color 160ms ease;

  &:hover {
    transform: translateY(-2px);
    background: var(
      --Gradient,
      linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
    );
    color: #fff;
    border-color: transparent;
  }

  ${mobile} {
    width: 56px;
    height: 56px;
  }
`;

export default function Contact() {
  return (
    <Layout>
      <SEO metaTitle="Contact Us | Nova for Good" />
      <Wrap>
        <ColoredStars />
        <Title>Contact Us</Title>
        <Sub>
          Interested? Email{" "}
          <a href="mailto:hello@novaforgood.org">hello@novaforgood.org</a> or
          reach out to our socials.
        </Sub>

        <Socials>
          <SocialCircle
            href="https://www.facebook.com/novaforgood"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={34} />
          </SocialCircle>

          <SocialCircle
            href="https://www.instagram.com/novaforgood/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={34} />
          </SocialCircle>

          <SocialCircle
            href="https://github.com/novaforgood"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={34} />
          </SocialCircle>
        </Socials>
      </Wrap>
    </Layout>
  );
}
