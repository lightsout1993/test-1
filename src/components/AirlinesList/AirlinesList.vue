<template>
  <v-container>
    <v-progress-circular
      v-if="fetching && !airlines.length"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    />
    <v-expansion-panels
      v-else-if="airlines.length"
      multiple
    >
      <range-filter />
      <airline
        v-for="({ logo, title, offers }, key) in airlines"
        :key="key"
        :logo="logo"
        :title="title"
      >
        <offers-list :offers="offers" />
      </airline>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { Airline, OffersList, RangeFilter } from '@/components';

export default {
  name: 'AirlinesList',
  components: {
    Airline,
    OffersList,
    RangeFilter,
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
  data() {
    return {
      slider: 0,
    };
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
