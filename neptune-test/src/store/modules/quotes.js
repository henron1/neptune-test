import axios from "axios";

const state = {
	quotes: [],
	token: "",
};

const getters = {
	allQuotes: (state) => state.quotes,
};

const actions = {
	async fetchToken({ commit }) {
		const response = await axios.get(
			`https://dev-api.neptuneflood.com/api/v3/auth/getToken`,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `${process.env.VUE_APP_AUTHORIZATION}`,
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
		commit("setToken", response.data);
	},
	async fetchQuote({ commit }) {
		const response = await axios.get(
			`http://localhost:8080/api/v3/rater/quotes/${state.quotes.quoteNumber}`,
			{
				headers: {
					Authorization: `${state.token}`,
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
		commit("setQuotes", response.data);
	},
	async createQuote({ commit }, application) {
		const response = await axios.post(
			`http://localhost:8080/api/v3/rater/quotes`,
			{ agentNo: "FL0008", password: "FL0008", application },
			{
				headers: {
					Authorization: `${state.token}`,
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
		commit("newQuote", response.data);
	},
	async getQuoteId({ commit }, quoteNumber) {
		const response = await axios.get(
			`http://localhost:8080/api/v3/rater/quotes/${quoteNumber}`,
			{
				headers: {
					Authorization: `${state.token}`,
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
		commit("setQuotes", response.data);
	},
};

const mutations = {
	setQuotes: (state, res) => (state.quotes = res),
	newQuote: (state, res) => (state.quotes = res),
	setToken: (state, res) => (state.token = res),
};
export default {
	state,
	getters,
	actions,
	mutations,
};
