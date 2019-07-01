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

const app = {
    title: 'Vacation Destination App',
    subtitle: 'Let\'s go!',
    options: [],
    printOptions() {
        return this.options.map((option, index) => (<li key={index}>{option}</li>));
    }
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <ol>
                {app.printOptions()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    
    // .render takes two args: 1st is the JSX I want to render, 2nd is the DOM element in which I want to render the JSX.

    ReactDOM.render(template, appRoot);
}

render();
