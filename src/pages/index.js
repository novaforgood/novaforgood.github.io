import React from "react";
import HomeBg from "../assets/24-25/home-bg.webp";
import HomeHeaderStars from "../assets/24-25/home-header-stars.webp";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/global.css";

export default function Home({ data }) {
    return (
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
                        <h1 className="absolute left-[100px] top-[0px] font-display text-[200px] font-bold text-black">
                            nova
                        </h1>
                        <h1 className="absolute left-[0px] top-[160px] font-display text-[200px] font-bold text-black">
                            tech
                        </h1>
                        <h1 className="absolute right-[0px] top-[200px] font-display text-[200px] font-bold text-black">
                            for
                        </h1>
                        <h1 className="absolute right-[25px] top-[350px] font-display text-[200px] font-bold text-black">
                            good
                        </h1>
                        <div className="absolute left-[60px] top-[420px] flex w-[300px] flex-col items-start gap-4">
                            <p className="text-md font-body font-light leading-6 text-black">
                                We are a team of students at UCLA who aim to
                                create high-impact technology that empowers
                                nonprofits to better serve their communities.
                            </p>
                            <button className="rounded-full bg-black px-6 py-2 font-body text-lg font-light uppercase text-white">
                                Work with us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
