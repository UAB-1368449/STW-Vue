var options = {
    el: '#app',
    data: {
        counter: 0
    },
    template: `<div>{{counter}}</div>`
};

var vm = new Vue(options);

setInterval(() => vm.counter++, 100);