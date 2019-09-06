<template>
  <v-text-field
    outlined
    required
    :rules="rules"
    :label="label"
    max-height="56"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length === 3) || 'Required 3 characters',
        value => /^[A-Z]+$/.test(value) || 'Uppercase only',
      ],
    };
  },
};
</script>
