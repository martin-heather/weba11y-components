<template>
	<div class="app">
		<AccessibleButton
			text="Submit"
		/>

		<AccessibleButton
			:inactive="true"
			text="Cancel"
		/>

		<AccessibleCard
			v-for="(card, index) in cards"
			:key="index"
			:card="card"
			header-level="h2"
		/>
	</div>
</template>

<script>
import AccessibleButton from './components/AccessibleButton/AccessibleButton.vue';
import AccessibleCard from './components/AccessibleCard/AccessibleCard.vue';

export default {
	name: 'App',
	components: {
		AccessibleButton,
		AccessibleCard,
	},

	data() {
		return {
			cards: [
				{
					title: 'Article that is an awesomeness',
					date: 'May 4, 2021',
					author: 'Julep',
					description: "Shores of the cosmic ocean dream of the mind's eye decipherment globular star cluster a billion trillion concept of the number one? Vanquish the impossible something incredible is waiting to be known",
					imageAlt: 'Randomly generated technology image from placeimg.com',
					imageSrc: 'https://placeimg.com/480/480/tech',
					link: 'https://duckduckgo.com/',
				},
				{
					title: 'An article that\'s just okay',
					date: 'May 3, 2021',
					author: 'Bowski',
					description: "Shores of the cosmic ocean dream of the mind's eye decipherment globular star cluster a billion trillion concept of the number one? Vanquish the impossible something incredible is waiting to be known",
					imageAlt: 'Randomly generated technology image from placeimg.com',
					imageSrc: 'https://placeimg.com/480/480/animals',
					link: 'https://duckduckgo.com/',
				},
				{
					title: 'A better article',
					date: 'May 3, 2021',
					author: 'Dobzische',
					description: "Shores of the cosmic ocean dream of the mind's eye decipherment globular star cluster a billion trillion concept of the number one? Vanquish the impossible something incredible is waiting to be known",
					imageAlt: 'Randomly generated technology image from placeimg.com',
					imageSrc: 'https://placeimg.com/480/480/arch',
					link: 'https://duckduckgo.com/',
				},
				{
					title: 'First article',
					date: 'May 1, 2021',
					author: 'Yams',
					description: "Shores of the cosmic ocean dream of the mind's eye decipherment globular star cluster a billion trillion concept of the number one? Vanquish the impossible something incredible is waiting to be known",
					imageAlt: 'Randomly generated technology image from placeimg.com',
					imageSrc: 'https://placeimg.com/480/480/nature',
					link: 'https://duckduckgo.com/',
				},
			],
		};
	},
};
</script>

<style>
.screen-reader-text {
	height: 1px;
	left: -10000px;
	overflow: hidden;
	position: absolute;
	top: auto;
	width: 1px;
}

html {
	font-size: 62.5%;
}

body {
	background-color: #efedea;
	color: #0c2f40;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	margin: 60px 20px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

h1 {
	font-size: 3.2rem;
}

h2 {
	font-size: 2.4rem;
}

h3 {
	font-size: 2rem;
}

h4 {
	font-size: 1.6rem;
}

h5 {
	font-size: 1.2rem;
}

h6 {
	font-size: 1rem;
}

p {
	font-size: 1.6rem;
	line-height: 2.25rem;
}
</style>
