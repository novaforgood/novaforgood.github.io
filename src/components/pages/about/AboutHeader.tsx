import React from "react";

interface Props {}

const AboutHeader = (props: Props) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center mobile:h-fit mobile:pb-0 mobile:pt-24">
            <div className="relative h-[35rem] w-[66rem] mobile:h-[600px] mobile:w-[20rem] mobile:py-12 desktop:-mt-32">
                <h1 className="absolute left-[0px] top-[0px] font-display text-[180px] font-bold text-black mobile:left-5 mobile:top-[0px] mobile:text-[96px]">
                    hi
                </h1>
                <h1 className="absolute left-[0px] top-[160px] font-display text-[180px] font-bold text-black mobile:left-0 mobile:top-[100px] mobile:text-[96px]">
                    there,
                </h1>
                {/* Desktop */}
                <h1 className="absolute right-[0px] top-[320px] font-display text-[180px] font-bold text-black mobile:hidden">
                    we are
                </h1>
                {/* Mobile */}
                <h1 className="absolute right-0 font-display text-[96px] font-bold text-black mobile:top-[200px] mobile:text-center desktop:hidden">
                    we
                </h1>
                <h1 className="absolute w-full font-display text-[96px] font-bold text-black mobile:top-[300px] mobile:text-center desktop:hidden">
                    are
                </h1>
                <h1 className="absolute top-[480px] w-full text-center font-display text-[180px] font-bold text-black mobile:top-[400px] mobile:text-center mobile:text-[96px]">
                    nova!
                </h1>
            </div>
        </div>
    );
};

export default AboutHeader;
