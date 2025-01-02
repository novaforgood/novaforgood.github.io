import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React from "react";

import TeamFruit from "../../../assets/24-25/pics/team-fruit.webp";
import TeamHike from "../../../assets/24-25/pics/team-hike.webp";
import TeamJanss from "../../../assets/24-25/pics/team-janss.webp";
import TeamThanksgiving from "../../../assets/24-25/pics/team-thanksgiving.webp";
import TeamVolunteering from "../../../assets/24-25/pics/team-volunteering.webp";
import TeamPie from "../../../assets/24-25/pics/team-pie.webp";
import TeamStars from "../../../assets/24-25/pics/team-stars.webp";
import { useMediaQuery } from "usehooks-ts";

interface Props {}

const GRID_IMAGES_DESKTOP = [
    TeamJanss,
    TeamPie,
    TeamHike,
    TeamFruit,
    TeamThanksgiving,
    TeamVolunteering,
];
const GRID_IMAGES_MOBILE = [TeamJanss, TeamThanksgiving, TeamVolunteering];

const AboutStory = (props: Props) => {
    const isMobile = useMediaQuery("(max-width: 700px)");

    const GRID_IMAGES = isMobile ? GRID_IMAGES_MOBILE : GRID_IMAGES_DESKTOP;

    return (
        <div className="my-20 flex w-screen items-center justify-center">
            <div className="relative flex w-[58rem] flex-col gap-8 mobile:w-[20rem]">
                <div className="flex flex-row gap-8 mobile:flex-col-reverse">
                    <p className="flex-1 font-body text-base font-light">
                        We were founded in November 2018, when our
                        co-founders—Bryan, Jessica, Max, and Stephanie—wanted to
                        use their technical skills to make an active impact in
                        the LA community.
                        <br />
                        <br />
                        In the coming weeks, they cold-emailed nonprofits across
                        the city, seeking out problems that technology could
                        tackle.
                        <br />
                        <br />
                        It's this constant desire to learn and create that has
                        brought together 40+ committed members working
                        year-round on projects to help nonprofits serve their
                        communities more effectively. We are a close-knit group
                        of CS, design, and business students at UCLA, each
                        actively participating in outreach, problem-solving, and
                        development.
                    </p>
                    <div className="flex flex-1 items-center justify-center bg-gray-200">
                        <img
                            src={TeamStars}
                            alt="Nova Stars Photoshoot"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry style={{ gap: "2rem" }} gutter="2rem">
                        {GRID_IMAGES.map((src, i) => (
                            <img
                                key={i}
                                // className="flex items-center justify-center bg-gray-200"
                                // style={{
                                //     height: i % 2 === 0 ? "400px" : "300px",
                                // }}
                                src={src}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry> */}

                {/* 3 wide 2 tall made of 3 side by side flex boxes */}
                {/* map 6 images to 3 vertical flex boxes */}
                <div className="flex gap-8 mobile:hidden">
                    <div className="flex flex-1 flex-col gap-8">
                        <img
                            src={GRID_IMAGES[0]}
                            alt="Team Janss"
                            className="object-cover"
                        />
                        <img
                            src={GRID_IMAGES[1]}
                            alt="Team Pie"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-8">
                        <img
                            src={GRID_IMAGES[2]}
                            alt="Team Hike"
                            className="object-cover"
                        />
                        <img
                            src={GRID_IMAGES[5]}
                            alt="Team Volunteering"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-8">
                        <img
                            src={GRID_IMAGES[4]}
                            alt="Team Thanksgiving"
                            className="object-cover"
                        />
                        <img
                            src={GRID_IMAGES[3]}
                            alt="Team Fruit"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-8 desktop:hidden">
                    {GRID_IMAGES.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Team ${i}`}
                            className="object-cover"
                        />
                    ))}
                </div>

                <p className="font-body text-base font-light">
                    We strive to understand the reality of under-resourced
                    communities by working closely with nonprofits. We represent
                    an ambitious, fast-moving, and creative team aiming to make
                    a lasting impact. <br />
                    <br /> We believe in the idea that anyone can help bring
                    change to the community. <br />
                    <br />
                    We are Nova.
                </p>
            </div>
        </div>
    );
};

export default AboutStory;
