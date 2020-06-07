<template>
	<div>
		<h3>Create a Quote</h3>
		<div class="add">
			<form @submit="onSubmit">
				<input
					type="text"
					v-model="application.addr1"
					placeholder="Enter Address 1..."
				/>
				<!-- <input type="text" v-model="addr2" placeholder="Enter Address 2..." /> -->
				<input
					type="text"
					v-model="application.city"
					placeholder="Enter City..."
				/>
				<input
					type="text"
					v-model="application.state"
					placeholder="Enter State..."
				/>
				<input
					type="text"
					v-model="application.zip"
					placeholder="Enter Zip..."
				/>

				<input type="submit" value="Sumbit" />
			</form>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "CreateQuote",
	data() {
		return {
			quoteNumber: "",
			application: {
				addr1: "",
				// addr2: "",
				city: "",
				state: "",
				zip: "",
			},
		};
	},
	methods: {
		...mapActions(["createQuote"]),
		onSubmit(e) {
			e.preventDefault();
			this.createQuote(this.application);
		},
	},
};
</script>

<style></style>
