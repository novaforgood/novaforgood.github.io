import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/layout";

import HomeBg from "../assets/24-25/home-bg.webp";
import HomeHeaderStars from "../assets/24-25/home-header-stars.webp";
import NovaButton from "../components/ui/NovaButton";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Layout>
                <SEO />
                <div>
                    <img
                        src={HomeBg}
                        alt="Home Background"
                        className="absolute -z-10 w-screen"
                    />

                    <div className="flex h-screen w-screen items-center justify-center">
                        <div className="relative -mt-24 h-[35rem] w-[66rem]">
                            <img
                                src={HomeHeaderStars}
                                alt="Home Header Stars"
                                className="absolute left-[315px] top-[-5px] z-10 w-[652px]"
                            />
                            <h1 className="font-display absolute left-[100px] top-[0px] text-[200px] font-bold text-black">
                                nova
                            </h1>
                            <h1 className="font-display absolute left-[0px] top-[160px] text-[200px] font-bold text-black">
                                tech
                            </h1>
                            <h1 className="font-display absolute right-[0px] top-[200px] text-[200px] font-bold text-black">
                                for
                            </h1>
                            <h1 className="font-display absolute right-[25px] top-[350px] text-[200px] font-bold text-black">
                                good
                            </h1>
                            <div className="absolute left-[60px] top-[420px] flex w-[300px] flex-col items-start gap-4">
                                <p className="text-md font-body font-light leading-6 text-black">
                                    We are a team of students at UCLA who aim to
                                    create high-impact technology that empowers
                                    nonprofits to better serve their
                                    communities.
                                </p>
                                <NovaButton>Work with us</NovaButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
