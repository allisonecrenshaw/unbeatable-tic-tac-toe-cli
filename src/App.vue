<template>
	<img alt="taco doodle" src="./assets/taco-doodle.jpg" class="small-image" />
	<HelloWorld msg="Welcome to Unbeatable Tic Taco Toe" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.small-image {
	max-width: 100px; /* Set a specific maximum width */
	height: auto; /* Maintain the aspect ratio */
}
</style>
