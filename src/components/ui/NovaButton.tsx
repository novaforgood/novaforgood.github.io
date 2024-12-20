import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import Arrow from "../../assets/icons/arrow.svg";
import { twMerge } from "tailwind-merge";

interface BaseProps {
    children?: React.ReactNode;
    className?: string;
    arrow?: boolean;
    standalone?: boolean;
}

type Props =
    | (BaseProps & { onClick: () => void; to?: never }) // Requires `onClick`, disallows `to`
    | (BaseProps & { to: string; onClick?: never }); // Requires `to`, disallows `onClick`

const NovaButton = ({
    children,
    className,
    arrow,
    onClick,
    to,
    standalone,
}: Props) => {
    if (to) {
        return (
            <Link
                to={to}
                className={clsx(
                    "group flex items-center justify-center rounded-full bg-black px-6 py-2 font-body text-lg font-light uppercase text-white ring-2 ring-inset ring-black transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black",
                    className,
                )}
            >
                {children}
                {arrow && (
                    <img
                        src={Arrow}
                        alt="Arrow"
                        className={twMerge(
                            "ml-2 h-4 transition-all duration-200 ease-in-out group-hover:ml-4 group-hover:rotate-45 group-hover:invert",
                            standalone &&
                                "ml-0 aspect-square h-1/2 group-hover:-ml-0",
                        )}
                    />
                )}
            </Link>
        );
    }
    return (
        <button
            onClick={onClick}
            className={clsx(
                "group flex items-center justify-center rounded-full bg-black px-6 py-2 font-body text-lg font-light uppercase text-white ring-2 ring-inset ring-black transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black",
                className,
            )}
        >
            {children}
            {arrow && (
                <img
                    src={Arrow}
                    alt="Arrow"
                    className={twMerge(
                        "ml-2 h-4 transition-all duration-200 ease-in-out group-hover:ml-4 group-hover:rotate-45 group-hover:invert",
                        standalone &&
                            "ml-0 aspect-square h-1/2 group-hover:-ml-0",
                    )}
                />
            )}
        </button>
    );
};

export default NovaButton;
