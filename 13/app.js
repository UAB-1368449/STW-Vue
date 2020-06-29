Vue.component('switch-button', {
    data: function() {
        return {
            state: 'on',
            onDisabled: 0,
            offDisabled: 1
        };
    },
    methods: {
        on: function () {
            this.state = 'on';
            this.$emit('on');
            this.onDisabled = 1;
            this.offDisabled = 0;
        },
        off: function () {
            this.state = 'off';
            this.$emit('off');
            this.onDisabled = 0;
            this.offDisabled = 1;
        }
    },
    template:
    `
        <div class="switch">
            <button class="button" :disabled="onDisabled == 1" v-on:click="on()">ON</button:>
            <button class="button" :disabled="offDisabled == 1" v-on:click="off()">OFF</button>
        </div>
    `
});

let options = {
    el: '#app',
    data: {
        state: null
    },
    template:
    `
        <div>
            <switch-button
                v-on:on = "state='just turned on'"
                v-on:off = "state='just turned off'"
            ></switch-button>{{ state }}
        </div>
    `
};

let vm = new Vue(options);