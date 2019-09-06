<template>
  <div>
    <offer
      v-for="(offer, key) in offers"

      :key="key"
      v-bind="offer"
    />
  </div>
</template>

<script>
import Offer from '../Offer';

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
</style>
