<template>
  <v-col cols="12">
    <v-card
      flat
      color="transparent"
    >
      <v-subheader>Default range slider</v-subheader>
      <v-card-text>
        <v-range-slider
          v-model="value1"
        />
      </v-card-text>

      <v-subheader>Disabled range slider</v-subheader>
      <v-card-text>
        <v-range-slider
          v-model="value2"
          disabled
        />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'RangeFilter',
};
</script>

<style scoped>

</style>
