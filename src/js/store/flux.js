const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				const header = { "Content-Type": "application/json" };

				fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: header
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(err => {
						console.log(err);
					});
				fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: header
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ characters: data.results });
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
};

export default getState;
