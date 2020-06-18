var options = {
    el: '#app',
    data: {
        a: false,
        b: false,
        c: false,
        d: false
    },
    watch: {
        a: function (val) {
            this.b = val;
        },
        b: function (val) {
            this.c = val;
        },
        c: function (val) {
            this.d = val;
        }
    },
    template:
    `    
        <div>
            <input type="checkbox" id="checkbox" v-model="a">
            <label for="checkbox">{{ a }} {{ b }} {{ c }} {{ d }}</label>
        </div>
    `
};

var vm = new Vue(options);