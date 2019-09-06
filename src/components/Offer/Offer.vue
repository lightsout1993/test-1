<template>
  <v-list-item>
    {{ id }}
    <span><b>Departure time:</b> {{ departureDate }}</span>
    <span><b>Departure airport:</b> {{ departureAirport }}</span>
    <span><b>Arrival time:</b> {{ arrivalDate }}</span>
    <span><b>Arrival airport:</b> {{ arrivalAirport }}</span>
    <span><b>Duration:</b> {{ durationFormatted }}</span>
    <span><b>Price:</b> {{ price }}</span>
  </v-list-item>
</template>

<script>
import { addMinutes, format, fromUnixTime } from 'date-fns';

export default {
  name: 'Offer',
  props: {
    id: {
      type: Number,
      required: true,
    },
    arrivalAirport: {
      type: String,
      default: '',
    },
    arrivalTimestamp: {
      type: Number,
      default: 0,
    },
    departureAirport: {
      type: String,
      default: '',
    },
    departureTimestamp: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    arrivalDate() {
      return format(fromUnixTime(this.arrivalTimestamp), 'yyyy-MM-dd hh:mm');
    },
    departureDate() {
      return format(fromUnixTime(this.departureTimestamp), 'yyyy-MM-dd hh:mm');
    },
    durationFormatted() {
      return format(addMinutes(new Date(0), this.duration), 'h\'h\' m\'m\'');
    },
  },
};
</script>
