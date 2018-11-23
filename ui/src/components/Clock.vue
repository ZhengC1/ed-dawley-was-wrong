<template>
    <div class="clock">
        <div class="row" id="clock-app">
            <div class="block">
                <p class="digit">{{ days | two_digits }}</p>
                <p class="text">Days</p>
            </div>
            <div class="block">
                <p class="digit">{{ hours | two_digits }}</p>
                <p class="text">Hours</p>
            </div>
            <div class="block">
                <p class="digit">{{ minutes | two_digits }}</p>
                <p class="text">Minutes</p>
            </div>
            <div class="block">
                <p class="digit">{{ seconds | two_digits }}</p>
                <p class="text">Seconds</p>
            </div>
        </div>
        <div class="row">
            <p class="text">
            Since Ed has been wrong 
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'clock',
    methods: {
        date: str => {
            return (Math.trunc(Date.parse(str) / 1000));
        }
    },

    created() {
        axios.get(`http://google.com`)
            .then(response => {
                this.posts = response.data
            })
            .catch(e => {
                this.errors.push(e)
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
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },

    /* Computed properties will be here */
    computed: {
        seconds() {
            return Math.abs(this.date("August 15, 2016") - this.now) % 60;
        },

        minutes() {
            return Math.abs(Math.trunc((this.date("August 15, 2016") - this.now) / 60)) % 60;
        },

        hours() {
            return Math.abs(Math.trunc((this.date("August 15, 2016") - this.now) / 60 / 60)) % 24;
        },

        days() {
            return Math.abs(Math.trunc((this.date("August 15, 2016") - this.now) / 60 / 60 / 24));
        }
    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
}

.text {
    color: #1abc9c;
    font-size: 40px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #ecf0f1;
    font-size: 150px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
}
#clock-app {
    align-items: center;
    background-color: #34495e;
    display: flex;
    justify-content: center;
}
</style>
