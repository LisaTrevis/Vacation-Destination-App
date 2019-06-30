'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML: an extension of the JS language

// This line will throw an error because I can only have one root element and this code has two. Needs a div wrapper.
// var template = <h1>Vacation Destination App</h1><p>This is some info</p>;

// NOTE: parens are NOT required, but they do make the code cleaner/easier to read.

var templateTest = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Vacation Destination App'
    ),
    React.createElement(
        'p',
        null,
        'Let\'s go!'
    )
);

// Here is some dynamic JSX pulling from an object:

var app = {
    title: 'Vacation Destination App',
    subtitle: 'Let\'s go!',
    options: ['Jamaica', 'Atlanta', 'Ghana'],
    printOptions: function printOptions() {
        return this.options.map(function (option, index) {
            return React.createElement(
                'li',
                { key: index },
                option
            );
        });
    }
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        app.printOptions()
    )
);

var count = 0;

var addOne = function addOne() {
    console.log('plus one');
};
var minusOne = function minusOne() {
    console.log('minus one');
};
var reset = function reset() {
    console.log('reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

var appRoot = document.getElementById('app');

// .render takes two args: 1st is the JSX I want to render, 2nd is the DOM element in which I want to render the JSX.
// ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot);
