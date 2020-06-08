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
				>{{
					// capitalizing first letter in the string
					allQuotes.status.charAt(0).toUpperCase() + allQuotes.status.slice(1)
				}}</span
			>
			<span v-else class="declined">{{
				allQuotes.status.charAt(0).toUpperCase() + allQuotes.status.slice(1)
			}}</span>
			<p v-if="allQuotes.policy !== undefined">
				<span class="premiumBlurb">Total Premium</span>${{
					// converting to currency
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
