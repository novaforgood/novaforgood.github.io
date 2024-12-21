import React from "react";
import Logo from "../assets/logo-black-transparent.png";
import NovaButton from "./ui/NovaButton";
import { Link } from "gatsby";
import InstagramIcon from "../assets/icons/instagram.png";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative flex min-h-screen flex-col overflow-hidden">
            {/* <Navbar /> */}
            <div className="pointer-events-none fixed top-0 z-50 flex w-screen justify-center">
                <div className="pointer-events-auto mt-8 flex h-12 w-[58rem] flex-row items-center rounded-full bg-white bg-opacity-25 backdrop-blur-md mobile:mt-4 mobile:bg-transparent mobile:backdrop-blur-none">
                    <img src={Logo} alt="Nova Logo" className="ml-4 h-10" />
                    {/* spacer */}
                    <div className="flex-1"></div>
                    <div className="flex h-full flex-row items-center justify-center gap-8 mobile:hidden">
                        <Link
                            to="about"
                            className="font-body font-light uppercase"
                        >
                            about
                        </Link>
                        <Link
                            to="work"
                            className="font-body font-light uppercase"
                        >
                            work
                        </Link>
                        <Link
                            to="join"
                            className="font-body font-light uppercase"
                        >
                            for students
                        </Link>
                        <NovaButton to="/collab" className="h-full">
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
                    <Link to="about" className="font-body font-light">
                        about
                    </Link>
                    <Link to="work" className="font-body font-light">
                        work
                    </Link>
                    <Link to="join" className="font-body font-light">
                        for students
                    </Link>
                    <Link to="collab" className="font-body font-light">
                        work with us
                    </Link>
                </div>
                <div className="flex items-center mobile:flex-col mobile:gap-4">
                    <div className="flex flex-1 items-center justify-center">
                        <p className="=font-body font-light">
                            hello@novaforgood.org
                        </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center mobile:mb-8">
                        <p className="font-body font-light">
                            © 2024 nova for good | Last updated December 2024
                        </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <a
                            className="h-8 w-8 rounded-full bg-black text-white"
                            href="https://www.instagram.com/novaforgood/"
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
