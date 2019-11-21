import React, { Component } from 'react';
import './App.css';
import First from './First/First.js'
import Counter from './Counter/Counter.js'

class App extends Component {

    state = {
        name: '',
    }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         persons: [
    //             { name: 'Mahfuzul Haque', email: 'Mahfuzkahn2125@gmail.com', phone: "+37253631295" },
    //             { name: 'Riaz Hanna', email: 'riyaz@gmail.com', phone: "+37253631295" },
    //             { name: 'Rony Mozumder', email: 'roby@gmail.com', phone: "+37253631295" }
    //         ]
    //     }
    // }

    inputHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

        render() {
            return (
                <div className="App">
              { /* this.state.persons.map((person, index) => {
                    return <First  
                        key = {index}
                        name = {person.name }
                        email ={person.email}
                        phone = {person.phone}  />
               
                 }) */}
              <Counter />
              <div className="container">
                    <input onChange= {this.inputHandler} type = "text"  name="input" placeholder="input your name" />

                     { this.state.name ? <p>Hello, my name is {this.state.name}</p> : '' }
              </div>
            </div>
            );
        }
}

export default App;