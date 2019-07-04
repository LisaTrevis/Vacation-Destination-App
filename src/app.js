class VacationDestinationApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>    
            <h1>Vacation Destination</h1>
            <h2>Let the Universe decide</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>Where should I go?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Options go here
            </div>
        );
    }
}
    
    class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption component here
            </div>
        );
    }
}

ReactDOM.render(<VacationDestinationApp />, document.getElementById('app'));