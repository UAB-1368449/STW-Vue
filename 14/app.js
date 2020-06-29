Vue.component('color-selector', {
    data: function () {
        return {
            valueR: 0,
            valueG: 0,
            valueB: 0,
            rgb:'rgb(0, 0, 0)',
            style: 'background-color: #000;'
        };
    },
    watch: {
        valueR: function (val) {
            this.rgb = 'rgb(' + this.valueR + ', ' + this.valueG + ', ' + this.valueB +')';
            this.style = 'background-color: ' + this.rgb + ';';
            this.$emit('color', this.rgb);
        },
        valueG: function (val) {
            this.rgb = 'rgb(' + this.valueR + ', ' + this.valueG + ', ' + this.valueB +')';
            this.style = 'background-color: ' + this.rgb + ';';
            this.$emit('color', this.rgb);
        },
        valueB: function (val) {
            this.rgb = 'rgb(' + this.valueR + ', ' + this.valueG + ', ' + this.valueB +')';
            this.style = 'background-color: ' + this.rgb + ';';
            this.$emit('color', this.rgb);
        }
    },
    template:
    `    <div class="container">
            <div class="color-box" v-bind:style="style"></div>
            <div class="input-holder">
                <div>R: <input type="range" min=0 max=255 step=1 v-model="valueR">{{ valueR }}</div>
                <div>G: <input type="range" min=0 max=255 step=1 v-model="valueG">{{ valueG }}</div>
                <div>B: <input type="range" min=0 max=255 step=1 v-model="valueB">{{ valueB }}</div>
            </div>
        </div>
    `
});

let options = {
    el: '#app',
    data: {
        color: null
    },
    template:
    `
        <div class="wrapper">
            <color-selector v-on:color="color = $event"></color-selector>
            <div v-bind:style="'color:' + color">TEXT</div>
        </div>
    `
};

let vm = new Vue(options);