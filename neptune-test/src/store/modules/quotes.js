import axios from "axios";
const tokenHeaders = {
	"Content-Type": "application/json",
	Authorization: "2B1E3BEC-83F9-4EE1-8EA5-HANK",
	"Access-Control-Allow-Origin": "http://localhost:8081",
};

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
	async fetchQuotes({ commit }) {
		const response = await axios.get(
			`http://localhost:8080/api/v3/rater/quotes/${state.quotes.quoteNumber}`,
			{
				headers: {
					Authorization: "558443F3-3333-4CF7-8B4E-HANK",
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
		// console.log(response.data);
		commit("setQuotes", response.data);
	},
	async createQuote({ commit }, application) {
		const response = await axios.post(
			`http://localhost:8080/api/v3/rater/quotes`,
			{ agentNo: "FL0008", password: "FL0008", application },
			{
				headers: {
					Authorization: "558443F3-3333-4CF7-8B4E-HANK",
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
		commit("newQuote", response.data);
		console.log(response.data);
	},
};

const mutations = {
	setQuotes: (state, res) => (state.quotes = res),
	newQuote: (state, res) => (state.quotes = res),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
