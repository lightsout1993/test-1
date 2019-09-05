<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        readonly
        outlined
        :label="label"
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="date"

      v-on="$listeners"
      @input="menu = false"
    />
  </v-menu>
</template>

<script>
export default {
  name: 'DateField',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menu: false,
      date: '',
    };
  },
};
</script>

<style scoped>

</style>
