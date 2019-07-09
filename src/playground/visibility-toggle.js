class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <p>Here are the details!</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// ;}

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>And here are the details!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot)
// };

// render();