<template>
  <v-select
    outlined
    :label="label"
    :items="['A', 'B', 'C', 'D', 'E']"
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
  },
};
</script>

<style lang="scss">
  .v-select {
    width: 1em;
  }
</style>
