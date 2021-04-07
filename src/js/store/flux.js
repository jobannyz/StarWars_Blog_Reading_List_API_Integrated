const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favlist: [],
			token: ""
		},

		actions: {
			fetchcharacter() {
				fetch("https://3000-turquoise-bovid-iq8u004o.ws-us03.gitpod.io/characters")
					.then(response => response.json())
					.then(result => {
						let list = [];
						list = result;
						setStore({ personajes: list });
					})
					.catch(error => console.log("error", error));
			},

			fetchplanets() {
				fetch("https://3000-turquoise-bovid-iq8u004o.ws-us03.gitpod.io/planets")
					.then(response => response.json())
					.then(result => {
						let list = [];
						list = result;
						setStore({ planetas: list });
					})
					.catch(error => console.log("error", error));
			},

			createFavorite: name => {
				const store = getStore();
				const validate = store.favlist.some(favorites => favorites.name === name);
				if (validate === false) {
					fetch("https://3000-turquoise-bovid-iq8u004o.ws-us03.gitpod.io/favorites", {
						method: "POST",
						headers: { "Content-Type": "application/json", Authorization: `Bearer ${getStore().token}` },
						body: JSON.stringify({
							name: `${name}`
						})
					})
						.then(response => response.json())
						.then(result => {
							setStore({ favlist: result });
						})
						.catch(error => console.log("error", error));
				}
			},

			deleteFunction: id => {
				fetch("https://3000-turquoise-bovid-iq8u004o.ws-us03.gitpod.io/favorites", {
					method: "DELETE",
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${getStore().token}` },
					body: JSON.stringify({
						id: id
					})
				})
					.then(response => response.json())
					.then(result => {
						setStore({ favlist: result });
					})
					.catch(error => console.log("error", error));
			},

			create_user: (email, password) => {
				fetch("https://3000-turquoise-bovid-iq8u004o.ws-us03.gitpod.io/user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: `${email}`,
						password: `${password}`
					})
				})
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			login_user: (email, password) => {
				fetch("https://3000-turquoise-bovid-iq8u004o.ws-us03.gitpod.io/token", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: `${email}`,
						password: `${password}`
					})
				})
					.then(response => response.json())
					.then(result => {
						setStore({ favlist: result.favorites });
						setStore({ token: result.token });
					})
					.catch(error => console.log("error", error));
			}

			// get_favorites: () => {
			// 	fetch("https://3000-turquoise-bovid-iq8u004o.ws-us03.gitpod.io/favorites", {
			// 		method: "GET",
			// 		headers: { "Content-Type": "application/json", Authorization: `Bearer ${getStore().token}` }
			// 	})
			// 		.then(response => response.json())
			// 		.then(result => {
			// 			let favlist = [];
			// 			result.map((item, index) => {
			// 				favlist.push(item.name);
			// 			});
			// 			setStore({ favlist: favlist });
			// 			console.log(result);
			// 			console.log(favlist);
			// 		})
			// 		.catch(error => console.log("error", error));
			// }
		}
	};
};

export default getState;
