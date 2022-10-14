<template>
	<!-- Semantic tag: button -->
	<!-- The button tag comes with baked-in functionality and accessibility -->
	<button
		:class="['button', {
			'button--inactive': inactive,
		}]"
		:disabled="inactive"
		@click="$emit('clicked!')"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'AccessibleButton',

	props: {
		form: {
			type: String,
			required: false,
			default: '',
			description: 'Indicates which form the button is part of if the element is outside the form element it belongs to',
		},

		inactive: {
			type: Boolean,
			required: false,
			default: false,
			description: 'Sets whether users can interact with the button',
		},

		text: {
			type: String,
			required: true,
			description: 'Supplies text to button',
		},
	},
};
</script>

<style lang="scss" src="./accessible-button.scss"/>
