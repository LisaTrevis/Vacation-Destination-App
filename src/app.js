console.log('app.js is running!');

// JSX - JavaScript XML: an extension of the JS language

// This line will throw an error because I can only have one root element and this code has two. Needs a div wrapper.
// var template = <h1>Vacation Destination App</h1><p>This is some info</p>;

// NOTE: parens are NOT required, but they do make the code cleaner/easier to read.

var template = (
    <div>
        <h1>Vacation Destination App</h1>
        <p>Let's go!</p>
    </div>
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
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

var userName = 'Lisa';
var userAge = 41;
var userLocation = 'Alameda';
var templateTest = (
    <div>
        <h1>{userName}</h1>
        <h2>{userName.toUpperCase()}</h2>
        <h2>{userName + '!'}</h2>
        <h3>{user.name}</h3>
        <p>Age: {userAge}</p>
        <p>Age: {user.age}</p>
        <p>Location: {userLocation}</p>
        <p>Location: {user.location}</p>
        <p>Location: {getLocation(user2.location)}</p>
    </div>
);

var templateTest1 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

// If an expression (in this case, location) returns undefined, nothing will show up, but it WON'T throw an error
// Ternary operator can be used similarly to calling a function but with one line of code. If there was no name property on user2, the string will appear rather than nothing like the location function.
var templateTest2 = (
    <div>
        <h1>{user2.name ? user2.name : 'Anonymous'}</h1>
        {user2.age >= 18 && <p>Age: {user2.age}</p>}
        {getLocation(user2.location)}
    </div>
);

ReactDOM.render(templateTest2, appRoot);
