import React, { Component } from 'react'


class First extends Component {
    render() {
        return (
            <div>
        		<h3>My name Is : {this.props.name} </h3>
        		<p>Email : {this.props.email}</p>
        		<p>Phone Number : {this.props.phone} </p>
        	</div>
        );
    }
}


export default First