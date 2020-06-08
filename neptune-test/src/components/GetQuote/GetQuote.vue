<template>
	<div>
		<h3>Already have a quote?</h3>
		<h2>Enter your Quote Id below to view it</h2>
		<form @submit="onSubmit">
			<input type="text" v-model="quoteNumber" placeholder="Quote Number..." />
			<input type="submit" value="Submit" />
		</form>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "GetQuote",
	data() {
		return {
			quoteNumber: "",
		};
	},
	methods: {
		...mapActions(["getQuoteId"]),
		onSubmit(e) {
			e.preventDefault();
			this.getQuoteId(this.quoteNumber);
		},
	},
};
</script>

<style></style>
