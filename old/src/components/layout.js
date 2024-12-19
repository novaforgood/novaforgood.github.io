import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ home, children }) {
	return (
		<div className="flex flex-col min-h-screen">
			{/* <Header /> */}
			{children}
			{/* <Footer /> */}
		</div>
	);
}
