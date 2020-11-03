'use strict';

console.log('app.js is running now!');

var app = {
    title: 'Vacation Desination App',
    subTitle: 'Make those 2021 travel plans!',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
