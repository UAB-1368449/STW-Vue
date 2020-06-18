var options = {
    el: '#app',
    data: {
        value: 50,
        hidden: true,
        style: 'color: hsl(0, 50%, 50%)'
    },
    watch: {
        value: function (val) {
            this.style = 'color: hsl(0,' + val + '%,50%)';

            if (val >= 70) {
                this.hidden = false;
            } else {
                this.hidden = true;
            }
        }
    },
    template:
        `
            <div>
                <div v-bind:style='style'>AM I RED?</div>
                <input type="range" min="1" max="100" v-model="value">
                <div v-if="!hidden">YES!</div>
            </div>
        `
};

var vm = new Vue(options);