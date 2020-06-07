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
		// onSubmit(e) {
		// 	e.preventDefault();
		// 	this.fetchQuotes();
		// },
	},
	computed: mapGetters(["allQuotes"]),
	created() {
		this.fetchQuotes();
	},
};
</script>

<style></style>
