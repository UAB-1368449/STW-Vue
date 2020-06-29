Vue.component('words-to-list', {
    props: ['words'],
    data: function () {
        return{
            listWords: this.words.split(' ')
        }
    },
    watch: {
        words: function (val) {
            console.log(val);
        }
    },
    template:
    `
        <div>
            <ul>
                <li v-for="word in listWords">{{ word }}</li>
            </ul>
        </div>
    `
});

var options = {
    el: '#app',
    template: `<words-to-list words="go for it"></words-to-list>`
};

var vm = new Vue(options);