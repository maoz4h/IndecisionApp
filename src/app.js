class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }
    
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleAddOption(option){
        if (!option){
            return 'Enter a valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1){
            return 'This item already exists';            
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])    
            };
        });
    }

    render(){
        const title = 'maoz';
        const subtitle = 'heiferman';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

// Stateless Functional Component:
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

// Stateless Functional Component:
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                    What Should I Do?
            </button>
        </div>
    );
};

// Stateless Functional Component:
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
    );
};

// Stateless Functional Component:
const Option = (props) => {
    return (
        <div>
            {
                props.optionText
            }
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);
        if (!error){
            e.target.elements.option.value = '';
        }

        this.setState(() => {
            return { error };
        });
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));