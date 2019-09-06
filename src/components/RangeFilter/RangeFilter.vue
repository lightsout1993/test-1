<template>
  <v-card
    flat
    color="transparent"
  >
    <v-subheader>Flight duration</v-subheader>
    <v-card-text>
      <v-range-slider
        v-model="duration"
        thumb-label="always"
        :min="durationRange[0]"
        :max="durationRange[1]"
        @change="durationFilter"
      >
        <template v-slot:thumb-label="props">
          {{ props.value | formatMinutes }}
        </template>
      </v-range-slider>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'RangeFilter',
  props: {
    durationRange: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      duration: this.durationRange,
    };
  },
  methods: {
    log(value) {
      console.log(value);
    },
    durationFilter() {
      this.$emit('duration-filter', this.duration);
    },
  },
};
</script>

<style lang="scss">
  .v-card {
    width: 100%;

    .v-slider__thumb-label.primary {
      font-size: 12px !important;
      height: 50px !important;
      width: 50px !important;
    }

    .v-subheader {
      margin-bottom: 35px;
    }
  }
</style>
