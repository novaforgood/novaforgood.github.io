import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
// import SEO from "../components/SEO";
import Layout from "../components/layout";

import HomeBg from "../assets/24-25/home/bg.webp";
import HomeHeader from "../components/pages/home/HomeHeader";
import HomeAbout from "../components/pages/home/HomeAbout";
import HomeInterested from "../components/pages/home/HomeInterested";
import HomeProjects from "../components/pages/home/HomeProjects";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            {/* <SEO /> */}
            {/* TODO: bring back seo */}
            <img
                src={HomeBg}
                alt="Home Background"
                className="absolute -z-10 h-full w-screen object-cover"
            />
            {/* <div> */}
            {/* </div> */}
            <HomeHeader />
            <HomeAbout />
            <HomeProjects />
            <HomeInterested />
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <>
        <title>Nova, Tech for Good</title>
    </>
);
