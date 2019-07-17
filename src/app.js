class VacationDestinationApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            optionsArray: props.optionsArray
        };
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                optionsArray: []
            };
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.optionsArray.length);
        const option = this.state.optionsArray[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.optionsArray.indexOf(option) > -1) {
                return 'This option already exists.';
        }

        this.setState((prevState) => {
            return {
                optionsArray: prevState.optionsArray.concat([option])
            };
        });
    }
    render() {
        const subTitleStr = 'Let the Universe decide';
        
        return (
            <div>
                <Header subTitle={subTitleStr} />
                <Action 
                    hasOptions={this.state.optionsArray.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.optionsArray}
                    handleDeleteOptions={this.handleDeleteOptions}    
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

VacationDestinationApp.defaultProps = {
    optionsArray: []
};

const Header = (props) => {
    return (
        <div>    
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Vacation Destination'
};

// class Header extends React.Component {
//     render() {
//         return (
//         <div>    
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subTitle}</h2>
//         </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            Where should I go?
        </button>
    </div>
    )
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     Where should I go?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
            <Option />
        </div>
    );
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//                 <Option />
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }
    
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error
                // error: error is the same thing as the shorthand es6 above.
            }
        });

    };

    render() {
    return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
        );
    }
}


ReactDOM.render(<VacationDestinationApp />, document.getElementById('app'));