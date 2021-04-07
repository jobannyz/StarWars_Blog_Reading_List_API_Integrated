import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					<Link to="/home">
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
				<ButtonGroup aria-label="Basic example">
					<DropdownButton variant="primary" id="dropdown-basic-button" title="Favorites">
						{store.favlist.length > 0 ? (
							store.favlist.map((item, index) => {
								return (
									<Dropdown.Item key={index} href="">
										<a id="button_link">{item.name}</a>
										<i
											className="fas fa-trash-alt"
											onClick={() => actions.deleteFunction(item.id)}
										/>
									</Dropdown.Item>
								);
							})
						) : (
							<Dropdown.Item>Empty</Dropdown.Item>
						)}
					</DropdownButton>
					<Button variant="secondary">{store.favlist.length}</Button>
				</ButtonGroup>
			</div>
		</nav>
	);
};
