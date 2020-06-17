var option = {
    el: '#app',
    data: {
        style: ''
    },
    template:
    `
        <input
            v-bind:style='style'
            v-on:keydown="style='background-color: red;'"
            v-on:keyup="style=''"
        >
    `
};

var vm = new Vue(option);