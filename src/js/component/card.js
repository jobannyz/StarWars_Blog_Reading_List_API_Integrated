import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function MyCard(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="card mx-2" style={{ maxWidth: "300px", minWidth: "250px", display: "inline-block" }}>
			<img
				src="https://www.cnet.com/a/img/T-zwa1cycBfOdn29bmDUY3eeRA4=/940x0/2013/05/15/58eb475d-871e-11e3-9955-14feb5ca9861/star-wars-logo_1.jpg"
				className="card-img-top"
				alt=""
			/>
			<div className="card-body">
				<h4 className="card-title">{props.name}</h4>
				<p className="card-text">Gender: {props.gender}</p>
				<p className="card-text">Hair Color: {props.hairColor}</p>
				<p className="card-text">Eye Color: {props.eyeColor}</p>
				<div className="d-flex justify-content-between">
					<Link to={`/detalles/${props.index}`}>
						<a href="#" className="btn btn-outline-primary">
							Learn more!
						</a>
					</Link>
					<a href="#" className="btn btn-outline-warning" onClick={() => actions.createFavorite(props.name)}>
						<i className="far fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);

	MyCard.propTypes = {
		index: PropTypes.number,
		name: PropTypes.string,
		gender: PropTypes.string,
		hairColor: PropTypes.string,
		eyeColor: PropTypes.string
	};
}

export function MyCardPlanets(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="card mx-2" style={{ maxWidth: "300px", minWidth: "250px", display: "inline-block" }}>
			<img
				src="https://www.cnet.com/a/img/T-zwa1cycBfOdn29bmDUY3eeRA4=/940x0/2013/05/15/58eb475d-871e-11e3-9955-14feb5ca9861/star-wars-logo_1.jpg"
				className="card-img-top"
				alt=""
			/>
			<div className="card-body">
				<h4 className="card-title">{props.planet}</h4>
				<p className="card-text">Population: {props.population} </p>
				<p className="card-text">Terrain: {props.terrain}</p>
				<div className="d-flex justify-content-between">
					<Link to={`/detalles2/${props.index}`}>
						<a href="#" className="btn btn-outline-primary">
							Learn more!
						</a>
					</Link>
					<a
						href="#"
						className="btn btn-outline-warning"
						onClick={() => actions.createFavorite(props.planet)}>
						<i className="far fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
	MyCardPlanets.propTypes = {
		index: PropTypes.number,
		planet: PropTypes.string,
		population: PropTypes.string,
		terrain: PropTypes.string
	};
}
