Vue.component('words-to-list', {
    props: ['words'],
    data: function () {
        return{
            listWords: this.words.split(' ')
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

let options = {
    el: '#app',
    template: `<words-to-list words="go for it"></words-to-list>`
};

let vm = new Vue(options);