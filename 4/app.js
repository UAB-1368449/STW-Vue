var options = {
    el: '#app',
    data: {
        str: ''
    },
    watch: {
        str: function (val) {
            if (val.length >= 5) {
                this.str = '';
            } else {
                this.str = val;
            }
        }
    },
    template: `
        <div>
            <input v-model="str">
        </div>`
};

var vm = new Vue(options);