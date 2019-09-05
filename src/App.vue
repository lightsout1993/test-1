<template>
  <v-app id="app">
    <Form
      :flight-classes="flightClasses"
      @submit="search"
    />
  </v-app>
</template>

<script>
import Form from '@/components/Form';
import client from './client';

const api = process.env.VUE_APP_API;
const apiId = process.env.VUE_APP_API_ID;

export default {
  name: 'App',
  components: {
    Form,
  },
  data() {
    return {
      api,
      apiId,
      authKey: null,
      flightClasses: ['E', 'W', 'B', 'F'],
    };
  },
  computed: {
    headers() {
      return {
        'etm-auth-key': this.authKey,
      };
    },
  },
  created() {
    this.login();
  },
  methods: {
    login() {
      client(`${this.api}/login/${this.apiId}`)
        .then(({ etm_auth_key: key }) => {
          this.authKey = key;
        })
        .catch(error => console.error(error));
    },

    search({
      departureAirport, arrivalAirport, date, flightClass,
    }) {
      const body = {
        directions: [
          {
            departure_code: departureAirport,
            arrival_code: arrivalAirport,
            date,
          },
        ],
        adult_qnt: 1,
        class: flightClass,
      };

      const options = {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body),
      };

      client(`${this.api}/air/search`, options)
        .then(({ request_id: requestId }) => this.getOffers(requestId))
        .catch(error => console.error(error));
    },

    getOffers(requestId) {
      client(`${this.api}/air/offers?request_id=${requestId}`, { headers: this.headers })
        .then(response => console.dir(response));
    },
  },
};
</script>

<style lang="scss">
  .v-application--wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
