<template>
	<!-- This component uses the semantic HTML tags <fieldset>, <legend>, <input> and <label> -->
	<!-- <fieldset> groups input elements and their labels within a <form>
			(in this case, found in src/App.vue)-->
	<fieldset :class="cssStyleOption">
		<!-- <legend> is a caption for its parent <fieldset> -->
		<legend>Select the weirdest-looking pup:</legend>
		<div
			v-for="(radio, index) in radios"
			:key="index"
			class="radio-wrapper"
		>
			<!-- The semantic <input type="radio"> is accessible by default - the important thing is to keep it accessible when styling is applied -->
			<input
				:id="radio.choice"
				:class="['radio-input', {
					'radio-input--inactive': radio.inactive,
				}]"
				:checked="radio.checked"
				:disabled="radio.inactive"
				:form="form"
				:name="radio.groupName"
				type="radio"
			>
			<!-- While accessible, <input type="radio"> is a small target to click. Because clicking on the associated <label> text also checks/unchecks the radio button, providing a larger target for users, it is important to always include one for each radio input -->
			<label
				:for="radio.choice"
				:class="['radio-label', {
					'radio-label--inactive': radio.inactive,
				}]"
			>
				{{ radio.choice }}
			</label>
		</div>
	</fieldset>
</template>

<script>
export default {
	name: 'AccessibleRadioGroup',

	props: {
		form: {
			type: String,
			required: false,
			default: '',
			description: 'Indicates which form the radio group is part of if the element is outside the form element it belongs to',
		},
		radios: {
			type: Array,
			required: true,
			description: 'Supplies data to radio group',
		},
		cssStyleOption: {
			type: String,
			required: true,
			validator: (value) => [
				'appearance-property',
				'before-pseudo-element',
				'default-HTML',
			].indexOf(value) !== -1,
			description: 'Demonstrates output of 3 different methods of styling radio buttons',
		},
	},
};
</script>

<style lang="scss" src="./accessible-radio-group.scss"/>
