<template>
	<div>
		<h2>Already have a quote?</h2>
		<h3>Enter your Quote Id below to view it</h3>
		<form class="form" @submit="onSubmit">
			<input
				class="inputs"
				type="text"
				v-model="quoteNumber"
				placeholder="Quote Number..."
			/>
			<input class="submitButton" type="submit" value="Find Quote" />
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
