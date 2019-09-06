<template>
  <v-form>
    <text-field
      v-model="departureAirport"
      label="Departure airport"
    />
    <text-field
      v-model="arrivalAirport"
      label="Arrival airport"
    />
    <date-field
      v-model="date"
      label="Departure date"
    />
    <vue-select
      v-model="flightClass"
      :items="flightClasses"
      label="Class"
    />
    <v-btn
      large
      depressed
      color="primary"
      min-height="56"
      @click="$emit('submit', $data)"
    >
      Search
    </v-btn>
  </v-form>
</template>

<script>
import DateField from '../DateField';
import TextField from '../TextField';
import Select from '../Select';

export default {
  name: 'Form',
  components: {
    DateField,
    TextField,
    VueSelect: Select,
  },
  props: {
    flightClasses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      date: '',
      flightClass: '',
      arrivalAirport: '',
      departureAirport: '',
    };
  },
};
</script>

<style lang="scss">
  .v-form {
    display: flex;
    width: 100%;

    > div.v-input, button {
      margin: 5px !important;
    }
  }

  .v-input {
    max-height: 56px;
  }

  .v-btn.v-size--large.v-btn--depressed {
    min-width: 130px;
  }
</style>
