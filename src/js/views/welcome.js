import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Login_user, Create_user } from "../component/login";

export function MyWelcome_page() {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Jumbotron>
				<h1>Bienvenido al Star Wars Blog Reading List</h1>
				<p>
					Este es un proyecto académico para 4Geeks Academy, donde se ha creado un API que contiene la base de
					datos con la información presentada y la configuración necesaria para las consultas a la misma.
				</p>
				<p>
					<Login_user />
					<Create_user />
				</p>
			</Jumbotron>
		</Container>
	);
}
