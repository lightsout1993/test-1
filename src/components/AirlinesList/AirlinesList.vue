<template>
  <v-container>
    <v-expansion-panels
      v-if="!fetching"
      multiple
    >
      <airline
        v-for="({ logo, title, offers }, key) in airlines"
        :key="key"
        :logo="logo"
        :title="title"
      >
        <offers-list :offers="offers" />
      </airline>
    </v-expansion-panels>
    <v-progress-circular
      v-else
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    />
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
    fetching: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
