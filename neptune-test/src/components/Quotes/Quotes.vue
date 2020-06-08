<template>
	<div>
		<div class="quotes">
			<div class="quote">
				{{ allQuotes.quoteNumber }}
				{{ allQuotes.application.addr1 }}
				{{ allQuotes.application.addr2 }}
				{{ allQuotes.application.city }}
				{{ allQuotes.application.state }}
				{{ allQuotes.application.zip }}
				<p v-if="allQuotes.policy !== undefined">
					${{ Number(allQuotes.policy.totalPremium).toFixed(2) }}
				</p>
				<p v-else>No Premium for this account</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "Quotes",
	methods: {
		...mapActions(["fetchQuote"]),
		// onSubmit(e) {
		// 	e.preventDefault();
		// 	this.fetchQuote();
		// },
	},
	computed: mapGetters(["allQuotes"]),
	// created() {
	// 	this.fetchQuote();
	// },
};
</script>

<style></style>
