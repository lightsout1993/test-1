<template>
  <v-list>
    <offer
      v-for="(offer, key) in offers"
      :id="key + 1"
      :key="key"
      v-bind="offer"
    />
  </v-list>
</template>

<script>
import Offer from '@/components/Offer';

export default {
  name: 'OffersList',
  components: {
    Offer,
  },
  props: {
    offers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
  .v-select {
    width: 1em;
  }

  .v-expansion-panel-content {
    .v-list-item {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid gray;
    }
  }
</style>
