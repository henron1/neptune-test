import axios from "axios";
const tokenHeaders = {
	"Content-Type": "application/json",
	Authorization: "2B1E3BEC-83F9-4EE1-8EA5-HANK",
	"Access-Control-Allow-Origin": "http://localhost:8081",
};
// const headers = {
// 	"Content-Type": "application/json",
// };

const state = {
	quotes: [],
};

const getters = {
	allQuotes: (state) => state.quotes,
};

const actions = {
	async fetchToken() {
		const response = await axios.get(
			`https://dev-api.neptuneflood.com/api/v3/auth/getToken`,
			{ tokenHeaders }
		);
		console.log(response.data);
	},
	async fetchQuotes() {
		const response = await axios.get(
			`http://localhost:8080/api/v3/rater/quotes/?quoteNumber=NC0158ADK3X5G`,
			{
				headers: {
					Authorization: "558443F3-3333-4CF7-8B4E-HANK",
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
		console.log(response.data);
	},
};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
