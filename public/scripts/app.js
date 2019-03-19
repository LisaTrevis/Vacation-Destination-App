'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML: an extension of the JS language

// This line will throw an error because I can only have one root element and this code has two. Needs a div wrapper.
// var template = <h1>Vacation Destination App</h1><p>This is some info</p>;

// NOTE: parens are NOT required, but they do make the code cleaner/easier to read.

var template = React.createElement(
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

// var content = {
//     title: 'Vacation Destination App',
//     subtitle: 'Let\'s go!'
// };
// var templateTwo = (
//     <div>
//         <h1>{content.title}</h1>
//         <p>{content.subtitle}</p>
//     </div>
// );

var appRoot = document.getElementById('app');

// .render takes two args: 1st is the JSX I want to render, 2nd is the DOM element in which I want to render the JSX.
// ReactDOM.render(template, appRoot);

var user = {
    name: 'Beeps',
    age: 12,
    location: 'The Present'
};

var user2 = {
    name: 'Sheeps',
    age: 22,
    location: 'MinneSNOWta'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return undefined;
    }
}

var userName = 'Lisa';
var userAge = 41;
var userLocation = 'Alameda';
var templateTest = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'h2',
        null,
        userName.toUpperCase()
    ),
    React.createElement(
        'h2',
        null,
        userName + '!'
    ),
    React.createElement(
        'h3',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user2.location)
    )
);

var templateTest1 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

// If an expression (in this case, location) returns undefined, nothing will show up, but it WON'T throw an error
// Ternary operator can be used similarly to calling a function but with one line of code. If there was no name property on user2, the string will appear rather than nothing like the location function.
var templateTest2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user2.name ? user2.name : 'Anonymous'
    ),
    user2.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user2.age
    ),
    getLocation(user2.location)
);

ReactDOM.render(templateTest2, appRoot);
