import React from "react";

interface Props {}

const AboutHeader = (props: Props) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="relative -mt-32 h-[35rem] w-[66rem]">
                <h1 className="absolute left-[0px] top-[0px] font-display text-[180px] font-bold text-black">
                    hi
                </h1>
                <h1 className="absolute left-[0px] top-[160px] font-display text-[180px] font-bold text-black">
                    there,
                </h1>
                <h1 className="absolute right-[0px] top-[320px] font-display text-[180px] font-bold text-black">
                    we are
                </h1>
                <h1 className="absolute top-[480px] w-full text-center font-display text-[180px] font-bold text-black">
                    nova!
                </h1>
            </div>
        </div>
    );
};

export default AboutHeader;
