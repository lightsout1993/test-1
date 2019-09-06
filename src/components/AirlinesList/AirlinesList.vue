<template>
  <v-container>
    <v-expansion-panels>
      <airline
        v-for="({ logo, title, offers }, key) in airlines"
        :key="key"
        :logo="logo"
        :title="title"
      >
        123
        <offers-list :offers="offers" />
      </airline>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import Airline from '../Airline';
import OffersList from '../OffersList';

export default {
  name: 'AirlinesList',
  components: {
    Airline,
    OffersList,
  },
  props: {
    airlines: {
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
