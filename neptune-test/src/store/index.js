import Vuex from "vuex";
import Vue from "vue";
import quotes from "./modules/quotes";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		quotes,
	},
});
