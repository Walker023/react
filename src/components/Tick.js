import React, { Component } from 'react'

export default class Tick extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: 10
        };
        
    }
    countDown() {
        this.setState({
            date: this.state.date - 1
        });
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.state.date > 0 ? this.countDown() : clearInterval(this.timerID);
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                倒计时:{this.state.date}
            </div>
        )
    }
}
