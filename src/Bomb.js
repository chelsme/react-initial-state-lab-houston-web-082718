// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render() {
        const checkSecondsLeft = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div>{checkSecondsLeft}</div>
        )
    }
}