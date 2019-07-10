class VacationDestinationApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            optionsArray: ['One', 'Two', 'Seven']
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
    render() {
        const titleStr = 'Vacation Destination';
        const subTitleStr = 'Let the Universe decide';
        
        return (
            <div>
                <Header title={titleStr} subTitle={subTitleStr} />
                <Action 
                    hasOptions={this.state.optionsArray.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.optionsArray}
                    handleDeleteOptions={this.handleDeleteOptions}    
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>    
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    Where should I go?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}
    
class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        
        if(option) {
            alert(option);
        }
    };

    render() {
    return (
        <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
        );
    }
}


ReactDOM.render(<VacationDestinationApp />, document.getElementById('app'));