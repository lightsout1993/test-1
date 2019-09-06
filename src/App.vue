<template>
  <v-app id="app">
    <vue-form
      :fetching="fetching"
      :flight-classes="flightClasses"
      @submit="search"
    />
    <airlines-list
      :airlines="airlines"
      :fetching="fetching"
    />
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
      fetching: false,
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
        this.fetching = false;
        throw new Error(message);
      }

      this.airlines = transformOffers(airlines);

      if (status === READY) this.fetching = false;

      if (status === IN_PROCCESS) {
        this.fetching = true;
        setTimeout(() => this.getOffers(requestId), 800);
      }
    },
  },
};
</script>

<style lang="scss">
  .v-application--wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 100px 20%;

    > .container {
      margin-top: 50px;
    }
  }
</style>
