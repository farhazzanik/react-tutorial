import React, { Component } from 'react';
import './App.css';
import First from './First/First.js'

class App extends Component {
    render() {
        return (
            <div className="App">
        		<First  name = 'Mahfuzul Haque' email = 'Mahfuzkhan2125@gmail.com' phone = '+37253631295' />
        		<First  name = 'Azizul Haque' email = 'aziz5252@gmail.com' phone = '+37253631295' />
        		
        	</div>
        );
    }
}

export default App;