var options = {
    el: '#app',
    data: {
        showButton: true
    },
    methods: {
        hide: function () {
            return this.showButton = false
        }
    },
    template: `<button v-if="showButton" v-on:click="hide()">Click me!</button>`
};

var vm = new Vue(options);