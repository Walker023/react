import React, { Component } from 'react'

export default class Ball extends Component {

    constructor(props){
        super(props);
        this.state = {
            x: this.props.x || 0,
            y: this.props.y || 0,
            w: this.props.w || 100,
            h: this.props.h || 100,
            color: this.props.color || '#ff001b',
            containerWidth: document.documentElement.clientWidth,
            containerHeight: document.documentElement.clientHeight,
        }
    }

    componentDidMount() {
        this.speedX = 10;
        this.speedY = 10;
        this.timerID = setInterval(() => {
            this.ballMove();
        }, 10);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    ballMove() {
        const width = this.state.containerWidth;
        const height = this.state.containerHeight;
        let newX = this.state.x + this.speedX;
        let newY = this.state.y + this.speedY;
        if (newX + this.state.w > width || (newX === 0 && this.speedX < 0)){
            this.speedX = this.speedX * -1;
        }
        if (newY + this.state.h > height || (newY === 0 && this.speedY < 0)) {
            this.speedY = this.speedY * -1;
        }
        this.setState({
            x: newX,
            y: newY
        })
    }

    render() {
        return (
            <div>
                <div style={{
                    width: this.state.w,
                    height: this.state.h,
                    backgroundColor: this.state.color,
                    position: 'fixed',
                    left: this.state.x,
                    top: this.state.y,
                    borderRadius: '50%'
                }}></div>
            </div>
        )
    }
}


