import React from "react";
import Logo from "../assets/logo-black-transparent.png";
import NovaButton from "./ui/NovaButton";
import { Link } from "gatsby";
import InstagramIcon from "../assets/icons/instagram.png";
import {
    COLLAB_FORM,
    INSTAGRAM_LINK,
    INTEREST_FORM,
    NOVA_EMAIL,
    PROJECTS_LINK,
} from "../links";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative flex min-h-screen flex-col overflow-hidden">
            {/* <Navbar /> */}
            <div className="pointer-events-none fixed top-0 z-50 flex w-screen justify-center">
                <div className="pointer-events-auto mt-8 flex h-12 w-[58rem] flex-row items-center rounded-full bg-white bg-opacity-25 backdrop-blur-md mobile:mt-4 mobile:bg-transparent mobile:backdrop-blur-none">
                    <Link to="/">
                        <img src={Logo} alt="Nova Logo" className="ml-4 h-10" />
                    </Link>
                    {/* spacer */}
                    <div className="flex-1"></div>
                    <div className="flex h-full flex-row items-center justify-center gap-8 mobile:hidden">
                        <Link
                            to="/about"
                            className="font-body font-light uppercase"
                        >
                            about
                        </Link>
                        <Link
                            target="_blank"
                            to={PROJECTS_LINK}
                            className="font-body font-light uppercase"
                        >
                            work
                        </Link>
                        <Link
                            target="_blank"
                            to={INTEREST_FORM}
                            className="font-body font-light uppercase"
                        >
                            for students
                        </Link>
                        <NovaButton
                            to={COLLAB_FORM}
                            target="_blank"
                            className="h-full"
                        >
                            Work with us
                        </NovaButton>
                    </div>
                </div>
            </div>
            {children}
            <div className="flex w-screen flex-col gap-10 pb-12">
                <div className="flex flex-row items-center justify-center gap-4">
                    <img src={Logo} alt="Nova Logo" className="h-10" />
                    <p className="font-body font-light">nova tech for good</p>
                </div>
                <div className="flex items-center justify-center gap-12 mobile:hidden">
                    <Link to="/about" className="font-body font-light">
                        about
                    </Link>
                    <Link
                        to={PROJECTS_LINK}
                        target="_blank"
                        className="font-body font-light"
                    >
                        work
                    </Link>
                    <Link
                        to={INTEREST_FORM}
                        target="_blank"
                        className="font-body font-light"
                    >
                        for students
                    </Link>
                    <Link
                        to={COLLAB_FORM}
                        target="_blank"
                        className="font-body font-light"
                    >
                        work with us
                    </Link>
                </div>
                <div className="flex items-center mobile:flex-col mobile:gap-4">
                    <div className="flex flex-1 items-center justify-center">
                        <Link
                            className="=font-body font-light"
                            to={`mailto:${NOVA_EMAIL}`}
                            target="_blank"
                        >
                            {NOVA_EMAIL}
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-center mobile:mb-8">
                        <p className="text-center font-body font-light mobile:flex mobile:flex-col mobile:gap-4">
                            <span>© 2024 nova for good</span>
                            <span className="mx-2 mobile:hidden">|</span>
                            <span>Last updated January 2025</span>
                        </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <a
                            className="h-8 w-8 rounded-full bg-black text-white"
                            href={INSTAGRAM_LINK}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={InstagramIcon}
                                alt="Nova Logo"
                                className="h-full w-full"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
