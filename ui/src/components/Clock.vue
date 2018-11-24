<template>
    <v-container>
        <v-layout row wrap align-center justify-center id="clock-app">
            <v-flex align-content-center md3 xs12>
                <p class="digit">{{ days | two_digits }}</p>
                <p class="text">Days</p>
            </v-flex>
            <v-flex align-content-center md3 xs12>
                <p class="digit">{{ hours | two_digits }}</p>
                <p class="text">Hours</p>
            </v-flex>
            <v-flex align-content-center md3 xs12>
                <p class="digit">{{ minutes | two_digits }}</p>
                <p class="text">Minutes</p>
            </v-flex>
            <v-flex align-content-center md3 xs12>
                <p class="digit">{{ seconds | two_digits }}</p>
                <p class="text">Seconds</p>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 class="text">
                Since Ed has been wrong
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'clock',
    beforeCreate() {
        axios.get('http://localhost:5000/api/last-time-ed-was-wrong', {
            headers: {"Access-Control-Allow-Origin": "*"}
        }).then(response => {
            this.date = Math.trunc(Date.parse(response.data) / 1000);
        }).catch(e => {
            this.errors = e
        })
    },

    /* ready function will be here */
    ready() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
    },

    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: Math.trunc((new Date()).getTime() / 1000),
        }
    },

    /* Computed properties will be here */
    computed: {
        seconds() {
            return Math.abs(this.date - this.now) % 60;
        },

        minutes() {
            return Math.abs(Math.trunc((this.date - this.now) / 60)) % 60;
        },

        hours() {
            return Math.abs(Math.trunc((this.date - this.now) / 60 / 60)) % 24;
        },

        days() {
            return Math.abs(Math.trunc((this.date - this.now) / 60 / 60 / 24));
        }
    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.text {
    color: #1abc9c;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    font-size: 30px;
}

.digit {
    color: #ecf0f1;
    font-size: 130px;
    font-weight: 100;
    font-family: 'Roboto', serif;
}
#clock-app {
    background-color: #34495e;
}
</style>
