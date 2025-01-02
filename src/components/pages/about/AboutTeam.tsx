import { graphql, StaticQuery } from "gatsby";
import React from "react";

interface Member {
    active: boolean;
    name: string;
    linkedinURL: string;
    role: string;
    project_case_study: Array<{ name: string }>;
    profilePicture: {
        file: {
            url: string;
        };
        localFile: {
            publicURL: string;
        };
    };
}

interface Props {}

const AboutTeam = (props: Props) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allContentfulMember {
                        nodes {
                            active
                            name
                            linkedinURL
                            role
                            project_case_study {
                                name
                            }
                            profilePicture {
                                file {
                                    url
                                }
                                localFile {
                                    publicURL
                                }
                            }
                        }
                    }
                }
            `}
            render={(data) => {
                let memberData: Member[] = data.allContentfulMember.nodes || [];
                memberData = memberData.filter(
                    (person) =>
                        person.name &&
                        person.name !== "Example Content" &&
                        person.name.length !== 0,
                );
                let actives = memberData.filter((person) => person.active);
                console.log(memberData);
                // shuffle actives
                actives = actives.sort(() => Math.random() - 0.5);
                let inactives = memberData.filter((person) => !person.active);
                // sort alphabetically by last name

                return (
                    <div className="flex w-screen items-center justify-center pb-40 pt-20">
                        <div className="relative flex w-[58rem] flex-col gap-24 mobile:w-[20rem] mobile:gap-12">
                            <h1 className="font-display text-[96px] font-bold leading-[96px] text-black mobile:text-[48px] mobile:leading-[48px]">
                                Meet
                                <br />
                                the team
                            </h1>

                            {/* 4 column grid */}
                            <div className="grid grid-cols-4 gap-16 mobile:grid-cols-2 mobile:gap-8">
                                {actives.map((person) => {
                                    return (
                                        <div
                                            className="flex flex-col items-center gap-4"
                                            key={person.name}
                                        >
                                            <img
                                                src={
                                                    person.profilePicture
                                                        .localFile?.publicURL
                                                }
                                                alt={person.name}
                                                className="aspect-square object-cover"
                                            />
                                            <p className="text-center font-body text-base font-light uppercase text-black">
                                                <a
                                                    href={makeHttps(
                                                        person.linkedinURL,
                                                    )}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-center text-black no-underline underline-offset-4 hover:underline"
                                                >
                                                    {person.name}
                                                </a>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* inactive members */}
                            <h1 className="font-display text-[96px] font-bold leading-[96px] text-black mobile:text-[48px] mobile:leading-[48px]">
                                Alumni
                            </h1>
                            <div className="grid grid-cols-4 gap-16 mobile:grid-cols-2 mobile:gap-8">
                                {inactives.map((person) => {
                                    return (
                                        <div className="flex flex-col items-center gap-4">
                                            <p className="text-center font-body text-base font-light uppercase text-black">
                                                <a
                                                    href={makeHttps(
                                                        person.linkedinURL,
                                                    )}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-black no-underline underline-offset-4 hover:underline"
                                                >
                                                    {person.name}
                                                </a>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            }}
        />
    );
};

function makeHttps(url: string) {
    if (!url) return url;
    // if no protocol, add https
    if (!url.includes("://")) {
        return "https://" + url;
    }
    return url;
}

export default AboutTeam;
