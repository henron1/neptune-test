<template>
	<div class="quotes">
		<div class="quote">
			{{ allQuotes.application.addr1 }}
			{{ allQuotes.application.addr2 }}
			{{ allQuotes.application.city }}
			{{ allQuotes.application.state }}
			{{ allQuotes.application.zip }}

			<span
				v-if="allQuotes.status.toLowerCase() == 'approved'"
				class="approved"
			>
				<!-- capitalizing first char in string -->
				{{
					allQuotes.status.charAt(0).toUpperCase() + allQuotes.status.slice(1)
				}}</span
			>
			<span v-else class="declined">
				{{
					allQuotes.status.charAt(0).toUpperCase() + allQuotes.status.slice(1)
				}}</span
			>
			<p v-if="allQuotes.policy !== undefined">
				<!-- converting to currency from string -->
				<span class="premiumBlurb">Total Premium</span>${{
					Number(allQuotes.policy.totalPremium).toFixed(2)
				}}
			</p>
			<p v-else>No Premium for this account</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import "./Quotes.styles.scss";
export default {
	name: "Quotes",
	computed: mapGetters(["allQuotes"]),
};
</script>
