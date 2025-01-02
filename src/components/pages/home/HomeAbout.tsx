import React from "react";
import Star1 from "../../../assets/24-25/home/about-star-1.webp";
import Star2 from "../../../assets/24-25/home/about-star-2.webp";
import Star3 from "../../../assets/24-25/home/about-star-3.webp";
import NovaButton from "../../ui/NovaButton";
import Team2024 from "../../../assets/24-25/pics/team-2024.webp";

interface Props {}

const HomeAbout = (props: Props) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="relative flex h-[35rem] w-[66rem] items-center justify-center mobile:w-[20rem]">
                <img
                    src={Star1}
                    alt="Star 1"
                    className="absolute left-[0px] top-[0px] z-10 mobile:hidden"
                />
                <img
                    src={Star2}
                    alt="Star 1"
                    className="absolute left-[-10px] top-[200px] z-10 mobile:hidden"
                />
                <img
                    src={Star3}
                    alt="Star 1"
                    className="absolute left-[420px] top-[430px] z-10 mobile:hidden"
                />
                <div className="flex w-[58rem] flex-row gap-2 mobile:flex-col mobile:gap-8">
                    <div className="flex flex-1 flex-col gap-8">
                        <h1 className="font-display text-[96px] font-bold leading-[96px] text-black mobile:text-[48px] mobile:leading-[48px]">
                            Who
                            <br className="desktop:hidden" /> we are
                            <NovaButton
                                arrow
                                standalone
                                className="ml-6 inline-flex h-[90px] w-[90px] align-middle mobile:h-[60px] mobile:w-[60px]"
                                to="/about"
                            />
                        </h1>
                        <p className="text-md font-body font-light leading-6 text-black desktop:pr-8">
                            We’re a team of developers, designers, and
                            businesspeople who love solving problems, addressing
                            challenges faced communities around us, and making a
                            difference.
                        </p>
                    </div>

                    <div className="flex flex-1 items-center justify-center bg-gray-200">
                        <img
                            src={Team2024}
                            alt="Team Fall 2024"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
