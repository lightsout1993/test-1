<template>
  <v-container>
    <v-progress-circular
      v-if="startedSearch && fetching"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    />
    <v-card v-else-if="!fetching && !airlines.length && startedSearch">
      Нет результатов
    </v-card>
    <v-expansion-panels
      v-if="airlines.length"
      multiple
    >
      <range-filter
        :duration-range="rangeDuration"
        @duration-filter="filter"
      />
      <airline
        v-for="({ logo, title, offers }, key) in airlinesFiltered"
        v-show="offers.length"
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
import Airline from '@/components/Airline';
import OffersList from '@/components/OffersList';
import RangeFilter from '@/components/RangeFilter';

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
    startedSearch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      slider: 0,
      durationFilter: null,
    };
  },
  computed: {
    rangeDuration() {
      return this.airlines.map(({ offers }) => offers)
        .reduce((acc, airline) => acc.concat(airline), [])
        .map(({ duration }) => duration)
        .sort((a, b) => a - b)
        .filter((airline, index, { length }) => index === 0 || index === length - 1) || [];
    },
    airlinesFiltered() {
      const [left, right] = this.durationFilter || this.rangeDuration;
      return this.airlines.map(airline => ({
        ...airline,
        offers: airline.offers.filter(({ duration }) => left <= duration && duration <= right),
      }));
    },
  },
  methods: {
    filter(range) {
      this.durationFilter = range;
    },
  },
};
</script>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    > .v-card.v-sheet {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      font-size: 1.2em;
    }
  }
</style>
