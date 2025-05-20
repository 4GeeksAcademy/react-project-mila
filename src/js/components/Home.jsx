import React from "react";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
import CardComponent from "./CardComponent";
import HeaderComponent from "./HeaderComponent";

//create your first component
const Home = () => {
	return (
		<>
			<NavBarComponent />
			<div className="container">
				<div className="row row-cols-1 row-cols-lg-4 g-4 py-3">
					<HeaderComponent/>
					
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default Home;