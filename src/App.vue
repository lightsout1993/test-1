<template>
  <v-app id="app">
    <vue-form
      :flight-classes="flightClasses"
      @submit="search"
    />
    <airlines-list :airlines="airlines" />
  </v-app>
</template>

<script>
import Form from '@/components/Form';
import AirlinesList from '@/components/AirlinesList';
import {
  api, apiId, client, transformOffers,
} from '@/helpers';

const IN_PROCCESS = 'InProcess';
const READY = 'Ready';
const ERROR = 'Error';

const NO_ERRORS = 'Нет ошибок';
const SUCCESS = 'Успешно';

export default {
  name: 'App',
  components: {
    AirlinesList,
    VueForm: Form,
  },
  data() {
    return {
      api,
      apiId,
      airlines: [],
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
            date,
            arrival_code: arrivalAirport,
            departure_code: departureAirport,
          },
        ],
        adult_qnt: 1,
        class: flightClass,
        fare_types: [
          'PUB',
          'NEG',
        ],
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
        .then(this.handlerOffersResponse)
        .catch(error => console.error(error));
    },

    handlerOffersResponse({
      message, offers: airlines, request_id: requestId, status,
    }) {
      if (status === ERROR || (message !== NO_ERRORS && message !== SUCCESS)) {
        throw new Error(message);
      }

      if (status === READY) this.airlines = transformOffers(airlines);

      if (status === IN_PROCCESS) {
        this.airlines = transformOffers(airlines);
        setTimeout(() => this.getOffers(requestId), 500);
      }

      console.dir(this.airlines);
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
