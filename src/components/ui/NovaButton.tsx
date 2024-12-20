import React from "react";

interface Props {
    children: React.ReactNode;
}

const NovaButton = ({ children }: Props) => {
    return (
        <button className="font-body rounded-full bg-black px-6 py-2 text-lg font-light uppercase text-white">
            {children}
        </button>
    );
};

export default NovaButton;
