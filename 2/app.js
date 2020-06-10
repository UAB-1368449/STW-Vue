var options = {
    el: '#app',
    data: {
        a: 0,
        b: 0
    },
    methods: {
        add: function () {
            return (parseFloat(this.a) + parseFloat(this.b))
        }
    },
    template: `
        <div>
            <input type="text" v-model="a">
            <input type="text" v-model="b">
            {{add()}}
        </div>
    `
};

var vm = new Vue(options);