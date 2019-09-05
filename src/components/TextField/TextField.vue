<template>
  <v-text-field
    outlined
    :label="label"
    max-height="56"
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
};
</script>
