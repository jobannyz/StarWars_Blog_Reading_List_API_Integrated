import React, { useState, useEffect, useContext, useReducer } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { MyCard, MyCardPlanets } from "../component/card";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 mb-5">
			<div clasName="float-end">
				<Link to="/">
					<Button variant="success">Iniciar sesión con otro usuario</Button>
				</Link>
			</div>
			<br />
			<h1 className="text-danger">Personajes</h1>
			<div className="flex-row mt-5" style={{ overflow: "auto", width: "1200px", display: "flex" }}>
				{store.personajes.map((item, index) => {
					return (
						<div key={index}>
							<MyCard
								name={item.name}
								gender={item.gender}
								hairColor={item.hair_color}
								eyeColor={item.eye_color}
								index={index}
							/>
						</div>
					);
				})}
			</div>
			<br />
			<h1 className="text-danger">Planetas</h1>
			<div className="flex-row mt-5" style={{ overflow: "auto", width: "1200px", display: "flex" }}>
				{store.planetas.map((item, index) => {
					return (
						<div key={index}>
							<MyCardPlanets
								planet={store.planetas[index].name}
								population={store.planetas[index].population}
								terrain={store.planetas[index].terrain}
								index={index}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
