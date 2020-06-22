var options = {
    el: '#app',
    data: {
        state: 0,
        styleRed: 'height: 30px; background-color: indianRed',
        styleYellow: 'height: 30px; background-color: khaki',
        styleGreen: 'height: 30px; background-color: lawngreen'
    },
    methods: {
        switchState: function () {
            this.state = (this.state + 1) % 3;

            switch (this.state) {
                case 0:
                    this.styleRed = 'height: 30px; background-color: indianRed';
                    this.styleYellow = 'height: 30px; background-color: khaki';
                    this.styleGreen = 'height: 30px; background-color: lawngreen';
                    break;
                case 1:
                    this.styleRed = 'height: 30px; background-color: indianRed';
                    this.styleYellow = 'height: 30px; background-color: yellow';
                    this.styleGreen = 'height: 30px; background-color: seagreen';
                    break;
                case 2:
                    this.styleRed = 'height: 30px; background-color: red';
                    this.styleYellow = 'height: 30px; background-color: khaki';
                    this.styleGreen = 'height: 30px; background-color: seagreen';
                    break;
                default:
                    break;
            }
        }
    },
    template:
    `
        <div>
            <div style="display: inline-block; width:30px;">
                <div v-bind:style="styleRed"></div>
                <div v-bind:style="styleYellow"></div>
                <div v-bind:style="styleGreen"></div>
            </div>
            <button v-on:click="switchState()">Switch</button>
        </div>
    `
};

var vm = new Vue(options);