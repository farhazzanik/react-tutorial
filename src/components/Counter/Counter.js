import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            color: 'black'
        }
    }

    dec = () => {
        this.setState({
            count: this.state.count - 1
        })

		this.changeColor()
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1
        })
        this.changeColor()
    }

    changeColor = () => {
    	if (this.state.count > 5) {
            this.setState({
                color: 'green'
            })
        } else if (this.state.count <= 0) {
            this.setState({
                color: 'red'
            })
        }else {
        	 this.setState({
                color: 'black'
            })
        }
    }


    render() {
        return (
            <div>
        		<h3 style = {{color:this.state.color}}>
        			<span onClick={this.dec}>-</span>
        				 {this.state.count}
        			<span onClick={this.inc}>+</span>
        		</h3>
        	</div>
        )
    }
}

export default Counter