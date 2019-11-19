import React, { Component } from 'react';
import './App.css';
import First from './First/First.js'
import Counter from './Counter/Counter.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Mahfuzul Haque', email: 'Mahfuzkahn2125@gmail.com', phone: "+37253631295" },
                { name: 'Riaz Hanna', email: 'riyaz@gmail.com', phone: "+37253631295" },
                { name: 'Rony Mozumder', email: 'roby@gmail.com', phone: "+37253631295" }
            ]
        }
    }
    render() {
        return (
            <div className="App">
              {this.state.persons.map((person, index) => {
                    return <First  
                        key = {index}
                        name = {person.name }
                        email ={person.email}
                        phone = {person.phone}  />
               
                 })}
              <Counter />
            </div>
        );
    }
}

export default App;