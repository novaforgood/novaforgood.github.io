import React from "react";
import Star1 from "../../../assets/24-25/home/about-star-1.webp";
import Star2 from "../../../assets/24-25/home/about-star-2.webp";
import Star3 from "../../../assets/24-25/home/about-star-3.webp";
import NovaButton from "../../ui/NovaButton";

interface Props {}

const HomeAbout = (props: Props) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="relative flex h-[35rem] w-[66rem] items-center justify-center">
                <img
                    src={Star1}
                    alt="Star 1"
                    className="absolute left-[0px] top-[0px] z-10"
                />
                <img
                    src={Star2}
                    alt="Star 1"
                    className="absolute left-[-10px] top-[200px] z-10"
                />
                <img
                    src={Star3}
                    alt="Star 1"
                    className="absolute left-[420px] top-[430px] z-10"
                />
                <div className="flex w-[58rem] flex-row gap-2">
                    <div className="flex flex-1 flex-col gap-8">
                        <h1 className="font-display text-[96px] font-bold leading-[96px] text-black">
                            Who we are
                            <NovaButton
                                arrow
                                standalone
                                className="ml-6 inline-flex h-[90px] w-[90px] align-middle"
                                to="/about"
                            />
                        </h1>
                        <p className="text-md pr-8 font-body font-light leading-6 text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris aliquam lorem fringilla vehicula
                            ultrices. Etiam elementum est est, vitae consectetur
                            metus ullamcorper eget.
                        </p>
                    </div>

                    <div className="flex flex-1 items-center justify-center bg-gray-200">
                        img placeholder
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
