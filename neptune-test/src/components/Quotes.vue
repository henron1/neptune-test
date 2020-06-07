<template>
	<div>
		<h3>Quotes</h3>
		<div class="quotes">
			<div
				v-for="quote in allQuotes"
				v-bind:key="quote.quoteNumber"
				class="quote"
			>
				{{ quote.addr1 }}
				{{ quote.city }}
				{{ quote.state }}
				{{ quote.zip }}
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "Quotes",
	methods: {
		...mapActions(["fetchQuotes"]),
	},
	computed: mapGetters(["allQuotes"]),
	created() {
		this.fetchQuotes();
	},
};
</script>

<style></style>
