import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Button, Modal, Form } from "react-bootstrap";

export function Login_user() {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		actions.login_user(email, password);
		setAuth(true);
	};

	return (
		<>
			<Button className="m-3" variant="primary" onClick={handleShow}>
				Iniciar Sesión
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ingrese su email y contraseña</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={event => handleSubmit(event)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Dirección de email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Ingrese su email"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Contraseña"
								value={password}
								onChange={event => setPassword(event.target.value)}
							/>
						</Form.Group>
						<Button className="m-3" variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
						<Button className="m-3" variant="primary" type="submit">
							Continuar
						</Button>
					</Form>
					{auth ? <Redirect to="/home" /> : null}
				</Modal.Body>
			</Modal>
		</>
	);
}

export function Create_user() {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		actions.create_user(email, password);
		setAuth(true);
	};

	return (
		<>
			<Button className="m-3" variant="danger" onClick={handleShow}>
				Crear un nuevo usuario
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ingrese la información solicitada para crear un nuevo usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={event => handleSubmit(event)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Dirección de email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Ingrese su email"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Contraseña"
								value={password}
								onChange={event => setPassword(event.target.value)}
							/>
						</Form.Group>
						<Button className="m-3" variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
						<Button className="m-3" variant="primary" type="submit" onClick={handleClose}>
							Continuar
						</Button>
					</Form>
					{auth ? <Redirect to="/" /> : null}
				</Modal.Body>
			</Modal>
		</>
	);
}
