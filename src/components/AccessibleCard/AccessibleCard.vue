<template>
	<article class="card">
		<div class="card__content">
			<span
				class="card__content-header"
				v-html="getCardHeader(card.title)"
			/>

			<p class="card__content-byline">
				by {{ card.author }} &centerdot;
			</p>

			<p class="card__content-date">
				{{ card.date }}
			</p>

			<p class="card__content-description">
				{{ card.description }}
			</p>

			<a
				class="card__content-link"
				:href="card.link"
				target="_blank"
			>
				Read more <p class="screen-reader-text">about {{ card.title }}</p>
			</a>
		</div>

		<img
			class="card__thumbnail"
			:src="card.imageSrc"
			:alt="card.imageAlt"
		>
	</article>
</template>

<script>
export default {

	props: {
		/* If an image is included in the card prop object, an alt-text must also be provided */
		card: {
			type: Object,
			required: true,
			description: 'Supplies card data',
		},

		headerLevel: {
			type: String,
			required: true,
			validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1,
			description: 'Assigns desired heading level to Card header',
		},
	},

	methods: {
		getCardHeader(title) {
			/* This method enables dynamic assignment of card title's header level
			via the headerLevel prop. This ensures cards appear correctly in the page
			hierarchy, providing essential information about page organization */

			return `<${this.headerLevel}>${title}</${this.headerLevel}>`;
		},
	},
};
</script>

<style lang="scss" src="./accessible-card.scss"/>
