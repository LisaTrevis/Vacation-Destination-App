let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
;}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>And here are the details!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot)
};

render();