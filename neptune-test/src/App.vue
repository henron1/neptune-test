<template>
	<div id="app">
		<CreateQuote />
		<GetQuote />
		<Quotes />
	</div>
</template>

<script>
import Quotes from "./components/Quotes/Quotes.vue";
import CreateQuote from "./components/CreateQuote/CreateQuote.vue";
import GetQuote from "./components/GetQuote/GetQuote.vue";
import { mapActions } from "vuex";
export default {
	name: "App",
	components: {
		Quotes,
		CreateQuote,
		GetQuote,
	},
	methods: {
		...mapActions(["fetchToken"]),
	},
	data() {
		return {
			quotes: [],
			token: "",
		};
	},
	created() {
		this.fetchToken();
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
