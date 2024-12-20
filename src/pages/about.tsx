import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";

import HomeBg from "../assets/24-25/home/bg.webp";
import HomeHeader from "../components/pages/home/HomeHeader";
import HomeAbout from "../components/pages/home/HomeAbout";
import HomeInterested from "../components/pages/home/HomeInterested";
import HomeProjects from "../components/pages/home/HomeProjects";
import AboutHeader from "../components/pages/about/AboutHeader";
import AboutTeam from "../components/pages/about/AboutTeam";
import AboutStory from "../components/pages/about/AboutStory";

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            {/* <SEO /> */}
            <img
                src={HomeBg}
                alt="Home Background"
                className="absolute -z-10 h-full w-screen object-cover"
            />
            {/* <div> */}
            {/* </div> */}
            <AboutHeader />
            <AboutStory />
            <AboutTeam />
        </Layout>
    );
};

export default AboutPage;

export const Head: HeadFC = () => <title>Home Page</title>;
