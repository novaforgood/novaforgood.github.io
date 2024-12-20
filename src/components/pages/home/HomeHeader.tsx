import React from "react";
import HomeHeaderStars from "../../../assets/24-25/home/header-stars.webp";
import NovaButton from "../../ui/NovaButton";

interface Props {}

const HomeHeader = (props: Props) => {
    return (
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
                        We are a team of students at UCLA who aim to create
                        high-impact technology that empowers nonprofits to
                        better serve their communities.
                    </p>
                    <NovaButton arrow to="collab">
                        Work with us
                    </NovaButton>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
