import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </div>
    );
}
