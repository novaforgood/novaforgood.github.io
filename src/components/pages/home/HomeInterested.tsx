import React from "react";
import Star1 from "../../../assets/24-25/home/interested-star-1.webp";
import Star2 from "../../../assets/24-25/home/interested-star-2.webp";
import Star3 from "../../../assets/24-25/home/interested-star-3.webp";
import NovaButton from "../../ui/NovaButton";

interface Props {}

const HomeInterested = (props: Props) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="relative flex h-[35rem] w-[66rem] items-center justify-center">
                <img
                    src={Star1}
                    alt="Star 1"
                    className="absolute right-[100px] top-[-20px] z-10"
                />
                <img
                    src={Star2}
                    alt="Star 1"
                    className="absolute left-[100px] top-[100px] z-10"
                />
                <img
                    src={Star3}
                    alt="Star 1"
                    className="absolute left-[30px] top-[250px] z-10"
                />
                <div className="flex w-[58rem] flex-col items-center gap-14">
                    <h1 className="font-display text-[96px] font-bold leading-[96px] text-black">
                        Interested?
                    </h1>
                    <div className="flex flex-row gap-12">
                        <NovaButton arrow to={"/collab"}>
                            Work with us
                        </NovaButton>
                        <NovaButton arrow to={"/join"}>
                            Join our team
                        </NovaButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeInterested;
