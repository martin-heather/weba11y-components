<template>
	<fieldset>
		<legend>Select the weirdest-looking pup:</legend>
		<div
			v-for="(radio, index) in radios"
			:key="index"
			class="radio-wrapper"
		>
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
	},
};
</script>

<style lang="scss" src="./accessible-radio-group.scss"/>
