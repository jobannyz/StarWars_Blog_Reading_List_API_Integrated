import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { DetailCard } from "./views/detalles";
import { DetailPlanets } from "./views/detalles2";
import { MyWelcome_page } from "./views/welcome";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<MyWelcome_page />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/detalles/:detallesid">
							<DetailCard />
						</Route>
						<Route exact path="/detalles2/:detallesid">
							<DetailPlanets />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
