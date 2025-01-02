import React from "react";
import HomeHeaderStars from "../../../assets/24-25/home/header-stars.webp";
import HomeHeaderStarsMobile from "../../../assets/24-25/home/header-stars-m.webp";
import NovaButton from "../../ui/NovaButton";
import { useMediaQuery } from "usehooks-ts";
import { COLLAB_FORM } from "../../../links";

interface Props {}

const HomeHeader = (props: Props) => {
    const isMobile = useMediaQuery("(max-width: 700px)");

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="relative -mt-24 h-[35rem] w-[66rem] mobile:w-[20rem]">
                <img
                    src={isMobile ? HomeHeaderStarsMobile : HomeHeaderStars}
                    alt="Home Header Stars"
                    className="absolute left-[315px] top-[-5px] z-10 w-[652px] max-w-none mobile:-left-10 mobile:-top-6 mobile:w-[25rem]"
                />
                <h1 className="absolute left-[100px] top-[0px] z-20 font-display text-[200px] font-bold text-black mobile:left-0 mobile:top-[0px] mobile:text-[96px]">
                    nova
                </h1>
                <h1 className="absolute left-[0px] top-[160px] font-display text-[200px] font-bold text-black mobile:left-0 mobile:top-[100px] mobile:text-[96px]">
                    tech
                </h1>
                <h1 className="absolute right-[0px] top-[200px] font-display text-[200px] font-bold text-black mobile:right-0 mobile:top-[200px] mobile:text-[96px]">
                    for
                </h1>
                <h1 className="absolute right-[25px] top-[350px] font-display text-[200px] font-bold text-black mobile:right-0 mobile:top-[300px] mobile:text-[96px]">
                    good
                </h1>
                <div className="absolute left-[60px] top-[420px] flex w-[300px] flex-col items-start gap-4 mobile:left-0 mobile:top-[470px] mobile:w-full">
                    <p className="text-md font-body font-light leading-6 text-black">
                        We are a team of students at UCLA who aim to create
                        high-impact technology that empowers nonprofits to
                        better serve their communities.
                    </p>
                    <NovaButton arrow to={COLLAB_FORM} target="_blank">
                        Work with us
                    </NovaButton>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
