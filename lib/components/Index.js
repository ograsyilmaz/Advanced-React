import React from "react";
import ReactDOM from 'react-dom';


class App extends React.Component {

    state = {
        answer: 42,
    };
    asynFunc =()=>{
return Promise.resolve(37);
    };

    async componentDidMount(){
        this.setState({
            answer :await this.asynFunc()
            
        });
        
    }
    render() {
        return (
            <h2> hello Class -- {this.state.answer} </h2>

        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);