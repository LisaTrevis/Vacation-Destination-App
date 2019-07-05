class VacationDestinationApp extends React.Component {
    render() {
        const title = 'Vacation Destination';
        const subTitle = 'Let the Universe decide';
        const options = ['One', 'Two', 'Four'];
        
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
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
    handlePick() {
        alert('handlePick');
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>Where should I go?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('Done');
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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