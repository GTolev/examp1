<template>
	<div class="main-wrap">
		<my-header v-if="$route.name !== 'Home'" ></my-header>
		
		<main class="my-main">
			<router-view/>
		</main>

		<my-footer />
	</div>

</template>

<script>
import {mapActions, mapState} from "vuex";
import {toRef} from "vue";

export default {
	name: "App",
	data() {
		return {
			isStickyHeader: false,

			isOpenCookies: true,
			isClickCustomize: false,
			activeTabs: [false, false, false],
			selectedTabsValues: {
				analyticsVal: true,
				marketingVal: true,
			},

			window: {
				width: 0,
				height: 0
			}
		};
	},
	computed: {
		...mapState("resize", ["view", "sizeWidth", "sizeHeight"]),
	},
	methods: {
		...mapActions("resize", ["changeSize"]),

		handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
			this.changeSize(this.window)
		},
	},
	created() {
		window.addEventListener('resize', this.handleResize);
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.handleResize);
		});
	},
	unmounted() {
		window.removeEventListener('resize', this.handleResize);
	},
}

</script>

<style>
@font-face {
	font-family: "Ubuntu-Regular";
	src: url("./assets/fonts/Ubuntu/Ubuntu-Regular.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "Ubuntu-Light";
	src: url("./assets/fonts/Ubuntu/Ubuntu-Light.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "Ubuntu-Bold";
	src: url("./assets/fonts/Ubuntu/Ubuntu-Bold.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "Ubuntu-Italic";
	src: url("./assets/fonts/Ubuntu/Ubuntu-Italic.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "Ubuntu-BoldItalic";
	src: url("./assets/fonts/Ubuntu/Ubuntu-BoldItalic.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "Ubuntu-Medium";
	src: url("./assets/fonts/Ubuntu/Ubuntu-Medium.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "Ubuntu-MediumItalic";
	src: url("./assets/fonts/Ubuntu/Ubuntu-MediumItalic.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}
</style>
