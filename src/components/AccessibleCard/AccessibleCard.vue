<template>
	<!-- Semantic tag: article -->
	<article class="card">
		<div class="card__content">
			<!-- Dynamic header option 1: from scratch -->
			<span
				:is="`${headerLevel}`"
				class="card__content-header"
			>
				{{ card.title }}
			</span>

			<!-- Dynamic header option 2: from component -->
			<DynamicHeader
				class="card__content-header"
				:header-level="headerLevel"
				:title="card.title"
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
				target="_self"
			>
				<!-- .screen-reader-text provides context to links
				when uninformative visual text links can't be avoided -->
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
import DynamicHeader from '../DynamicHeader/DynamicHeader.vue';

export default {
	name: 'AccessibleCard',

	components: {
		DynamicHeader,
	},

	props: {
		/* If an image is included in the card prop object, an alt-text must also be provided */
		card: {
			type: Object,
			required: true,
			description: 'Supplies card data',
		},

		/* This prop enables dynamic assignment of card title's header level,
		ensuring that cards appear correctly in the page hierarchy and
		providing essential information about page organization */
		headerLevel: {
			type: String,
			required: true,
			validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1,
			description: 'Assigns desired heading level to Card header',
		},
	},
};
</script>

<style lang="scss" src="./accessible-card.scss"/>
