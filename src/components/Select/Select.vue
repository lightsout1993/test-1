<template>
  <v-select
    outlined
    :label="label"
    :items="items"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'Select',
  props: {
    label: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .v-select {
    width: 1em;
  }
</style>
