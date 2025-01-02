import React from "react";
import Star1 from "../../../assets/24-25/home/projects-star-1.webp";
import NovaButton from "../../ui/NovaButton";
import { PROJECTS_LINK } from "../../../links";
import GFLAImage from "../../../assets/24-25/pics/gfla.webp";
import RopaImage from "../../../assets/24-25/pics/project-ropa.webp";

interface Props {}

const HomeProjects = (props: Props) => {
    return (
        <div className="mt-24 flex min-h-screen w-screen justify-center">
            <div className="relative flex w-[66rem] items-center justify-center mobile:w-[20rem]">
                <img
                    src={Star1}
                    alt="Star 1"
                    className="absolute right-[120px] top-[-130px] z-10 mobile:right-[40px] mobile:top-[-50px] mobile:w-[100px]"
                />
                <div className="flex w-[58rem] flex-col gap-12 mobile:w-[20rem]">
                    <h1 className="font-display text-[96px] font-bold leading-[96px] text-black mobile:text-[48px] mobile:leading-[48px]">
                        Our <br className="desktop:hidden" /> favorite projects
                        <NovaButton
                            arrow
                            standalone
                            className="ml-6 inline-flex h-[90px] w-[90px] align-middle mobile:h-[60px] mobile:w-[60px]"
                            to={PROJECTS_LINK}
                            target="_blank"
                        />
                    </h1>
                    <div className="flex flex-row gap-8 mobile:flex-col">
                        <div className="flex aspect-auto flex-1 items-center justify-center bg-gray-200">
                            <img
                                src={GFLAImage}
                                alt="Good Food LA"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex w-[22rem] max-w-full flex-col items-start gap-6">
                            <h1 className="font-body text-[48px] font-light uppercase leading-[48px] text-black">
                                GOOD FOOD LA
                            </h1>
                            <p className="text-md pr-8 font-body font-light leading-6 text-black">
                                Nova worked with the LA Food Policy Council to
                                help EBT recipients locate healthy food sources
                                in the LA area.
                            </p>
                            <NovaButton
                                to={PROJECTS_LINK}
                                target="_blank"
                                arrow
                            >
                                See projects
                            </NovaButton>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8 mobile:flex-col">
                        <div className="flex aspect-auto flex-1 items-center justify-center bg-gray-200">
                            <img
                                src={RopaImage}
                                alt="Project Ropa"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex w-[22rem] max-w-full flex-col items-start gap-6">
                            <h1 className="font-body text-[48px] font-light uppercase leading-[48px] text-black">
                                PROJECT ROPA
                            </h1>
                            <p className="text-md pr-8 font-body font-light leading-6 text-black">
                                Nova developed an offline mobile application for
                                Project Ropa to efficiently track individuals
                                experiencing homelessness, enabling volunteers
                                to register and check in users quickly without
                                internet access.
                            </p>
                            <NovaButton
                                to={PROJECTS_LINK}
                                target="_blank"
                                arrow
                            >
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
