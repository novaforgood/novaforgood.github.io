import React from "react";
import Star1 from "../../../assets/24-25/home/projects-star-1.webp";
import NovaButton from "../../ui/NovaButton";

interface Props {}

const HomeProjects = (props: Props) => {
    return (
        <div className="mt-24 flex min-h-screen w-screen justify-center">
            <div className="relative flex w-[66rem] items-center justify-center">
                <img
                    src={Star1}
                    alt="Star 1"
                    className="absolute right-[120px] top-[-130px] z-10"
                />
                <div className="flex w-[58rem] flex-col gap-12">
                    <h1 className="font-display text-[96px] font-bold leading-[96px] text-black">
                        Our favorite projects
                        <NovaButton
                            arrow
                            standalone
                            className="ml-6 inline-flex h-[90px] w-[90px] align-middle"
                            to="/about"
                        />
                    </h1>
                    <div className="flex flex-row gap-8">
                        <div className="flex aspect-video flex-1 items-center justify-center bg-gray-200">
                            img placeholder
                        </div>
                        <div className="flex w-[20rem] flex-col items-start gap-6">
                            <h1 className="font-body text-[48px] font-light uppercase leading-[48px] text-black">
                                Our favorite projects
                            </h1>
                            <p className="text-md pr-8 font-body font-light leading-6 text-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris aliquam lorem fringilla
                                vehicula ultrices.
                            </p>
                            <NovaButton to="/projects" arrow>
                                See projects
                            </NovaButton>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8">
                        <div className="flex aspect-video flex-1 items-center justify-center bg-gray-200">
                            img placeholder
                        </div>
                        <div className="flex w-[20rem] flex-col items-start gap-6">
                            <h1 className="font-body text-[48px] font-light uppercase leading-[48px] text-black">
                                Our favorite projects
                            </h1>
                            <p className="text-md pr-8 font-body font-light leading-6 text-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris aliquam lorem fringilla
                                vehicula ultrices.
                            </p>
                            <NovaButton to="/projects" arrow>
                                See projects
                            </NovaButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProjects;
