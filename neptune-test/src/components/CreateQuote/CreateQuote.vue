<template>
	<div>
		<h1>Create a Quote</h1>
		<div class="add">
			<form class="form" @submit="onSubmit">
				<label for="application.addr1">Address 1</label>
				<input
					class="inputs"
					type="text"
					v-model="application.addr1"
					placeholder="Enter Address 1..."
				/>
				<label for="application.addr2">Address 2</label>
				<input
					class="inputs"
					type="text"
					v-model="application.addr2"
					placeholder="Enter Address 2..."
				/>
				<label for="application.city">City</label>
				<input
					class="inputs"
					type="text"
					v-model="application.city"
					placeholder="Enter City..."
				/>
				<label for="application.state">State</label>
				<input
					class="inputs"
					type="text"
					v-model="application.state"
					placeholder="Enter State..."
				/>
				<label for="application.zip">Zipcode</label>
				<input
					class="inputs"
					type="text"
					v-model="application.zip"
					placeholder="Enter Zip..."
				/>
				<input class="submitButton" type="submit" value="Create Quote" />
			</form>
		</div>
	</div>
</template>

<script>
import "./CreateQuote.styles.scss";
import { mapActions } from "vuex";
export default {
	name: "CreateQuote",
	data() {
		return {
			quoteNumber: "",
			application: {
				addr1: "",
				addr2: "",
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
