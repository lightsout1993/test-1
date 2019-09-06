<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <img
        :src="logo"
        :alt="title"
      >
      <span>{{ title }}</span>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <slot />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'ListAirlines',
  props: {
    logo: {
      type: String,
      required: true,
    },
    title: {
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
  .v-expansion-panel-header {
    > img {
      max-width: 100px;
      margin-right: 2em;
    }
    > span {
      width: 100%;
    }
  }
</style>
