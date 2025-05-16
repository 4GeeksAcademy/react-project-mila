import React from "react";

import FooterComponent from "./FooterComponent";
import CardComponent from "./CardComponent";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container">
				<div className="row row-cols-1 row-cols-lg-4 g-4 py-3">
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