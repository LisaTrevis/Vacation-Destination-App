'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML: an extension of the JS language

// This line will throw an error because I can only have one root element and this code has two. Needs a div wrapper.
// var template = <h1>Vacation Destination App</h1><p>This is some info</p>;

// NOTE: parens are NOT required, but they do make the code cleaner/easier to read.

// const templateTest = (
//     <div>
//         <h1>Vacation Destination App</h1>
//         <p>Let's go!</p>
//     </div>
// );

// Here is some dynamic JSX pulling from an object:

var app = {
    title: 'Vacation Destination App',
    subtitle: 'Let\'s go!',
    options: [],
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

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var remove = function remove() {
    app.options = [];
    render();
};

var onPickDestination = function onPickDestination() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
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
            'button',
            { disabled: app.options.length === 0, onClick: onPickDestination },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: remove },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.printOptions()
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    // .render takes two args: 1st is the JSX I want to render, 2nd is the DOM element in which I want to render the JSX.

    ReactDOM.render(template, appRoot);
};

render();
