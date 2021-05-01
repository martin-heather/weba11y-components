<template>
	<article class="card">
		<div class="card__content">
			<span
				class="card__content-header"
				v-html="cardHeader"
			/>
			<p class="card__content-date">
				May 1, 2021
			</p>
			<p class="card__content-byline">
				&nbsp;by Heather
			</p>
			<p class="card__content-description">
				Shores of the cosmic ocean dream of the mind's eye decipherment globular
				star cluster a billion trillion concept of the number one? Vanquish the
				impossible something incredible is waiting to be known
			</p>
			<a
				class="card__content-link"
				href="#"
			>
				Read more <p class="screen-reader-text">about {{ title }}</p>
			</a>
		</div>

		<img
			class="card__thumbnail"
			:src="imageSrc"
			:alt="imageAlt"
		>
	</article>
</template>

<script>
export default {

	props: {
		headerLevel: {
			type: String,
			required: true,
			validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1,
			description: 'Assigns desired heading level to Card header',
		},

		imageAlt: {
			type: String,
			required: false,
			default: '',
			description: 'Supplies alt-text to optional card image',
		},

		imageSrc: {
			type: String,
			required: false,
			default: '',
			description: 'Supplies link to optional card image',
		},
	},
	data() {
		return {
			title: 'Title of an awesomeness',
		};
	},

	methods: {},
};
</script>

<style lang="scss" src="./accessible-card.scss"/>
