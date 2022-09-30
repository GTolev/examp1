<template>
	<div class="home">
		<h1 class="home__title">
			<router-link
				:to="'/welcome'"
				exact
			>
				Buildings
			</router-link>
		</h1>

		<p class="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo in dolore excepturi maiores nulla exercitationem maxime, totam dolorem id eligendi obcaecati voluptatum vel atque sapiente tenetur beatae recusandae. Animi!</p>
	</div>
</template>

<script>
import {mapState} from "vuex";

export default {
	name: "Home",
	data() {
		return {

		}
	},
	computed: {
		...mapState ('resize', ['sizeWidth', 'sizeHeight'])
	}
}
</script>