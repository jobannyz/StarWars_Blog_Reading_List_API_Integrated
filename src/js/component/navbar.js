import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					<Link to="/">
						<a className="navbar-brand container" href="#">
							<img
								src="https://toppng.com/uploads/preview/star-wars-logo-png-985-free-transparent-png-logos-ahold-star-wars-jedi-gels-fruit-flavored-snacks-6-11562891058yyocheksib.png"
								alt=""
								width="70"
								height="100%"
							/>{" "}
						</a>
					</Link>
				</div>
				<DropdownButton id="dropdown-basic-button" title={`Favorites ${store.favlist.length}`}>
					{store.favlist.map((item, index) => {
						return (
							<Dropdown.Item key={index} href="">
								<a id="button_link">{item}</a>
								<i className="fas fa-trash-alt" onClick={() => actions.deleteFunction(index)} />
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
			</div>
		</nav>
	);
};
