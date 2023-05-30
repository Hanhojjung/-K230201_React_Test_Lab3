
import React, { Component } from 'react';

const styles = {
    wrapper : {
    margin : 8,
    padding : 8,
    display : "flex",
    flexDirection : "row",
    border : "1px solid grey",
    borderRadius: 16
    },

    messageText : {
    color : "green",
    fontSize : 28,
    }
}

class MenuItem extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
     componentDidMount(){
        console.log("componentDidMount() 호출이 되었음.")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate() 호출이 되었음.")
    }
    componentWillUnmount()
    {
        console.log("componentWillUnmount() 호출이 되었음.")
    }
    render() {
        return (
            <div style={styles.wrapper}>
                <span state={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default MenuItem;