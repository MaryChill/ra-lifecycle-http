import React from 'react';



export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            secondDegrees: 0,
            minuteDegrees: 0,
            hourDegrees: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    toOffsetDate(offset) {
        let d = new Date(new Date().getTime() - (offset * 60 * 1000));
        let hrs = d.getUTCHours() > 12 ? d.getUTCHours() - 12 : d.getUTCHours();
        let mins = d.getUTCMinutes();
        let secs = d.getUTCSeconds();

        this.setState({
            secondDegrees: 360 / 60 * secs + 180,
            minuteDegrees: 360 / 60 * mins + 6 / 60 * secs + 180,
            hourDegrees: 360 / 12 * hrs + 30 / 60 * mins + 0.5 / 60 * secs + 180
        });
    }

    tick() {
        this.setState({
            time: this.toOffsetDate(this.props.offset)
        })
    }


    render() {
        return (
            <div>
                <ul id="clock">
                    <li id="sec" style={{ transform: `rotate(${this.state.secondDegrees}deg)` }}></li>
                    <li id="hour" style={{ transform: `rotate(${this.state.hourDegrees}deg)` }}></li>
                    <li id="min" style={{ transform: `rotate(${this.state.minuteDegrees}deg)` }}></li>
                </ul>
            </div>
        )
    }
}