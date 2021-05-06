<template>
	<span
		:is="`${headerLevel}`"
		class="dynamic-header"
	>
		{{ title }}
	</span>
</template>

<script>
export default {
	name: 'DynamicHeader',

	props: {
		title: {
			type: String,
			required: true,
			description: 'Supplies title text',
		},

		/* This prop enables dynamic assignment of a title's header level,
		ensuring that the titles of components where it is used appear correctly
		in the page hierarchy, providing essential information about page organization */
		headerLevel: {
			type: String,
			required: true,
			validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1,
			description: 'Assigns desired heading level to a title',
		},
	},
};
</script>
