<template>
  <v-form>
    <text-field
      label="Departure airport"
    />
    <text-field label="Arrival airport" />
    <date-field label="Departure date" />
    <vue-select label="Class" />
    <v-btn
      large
      depressed
      color="primary"
      min-height="56"
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
};
</script>

<style lang="scss">
  .v-form {
    width: 70%;
    display: flex;

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
