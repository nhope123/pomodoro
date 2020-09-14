import React from 'react';
import './clock.css';
import {Exhibit} from './display.js';
import {Set, Control} from './button.js';

// Gobal variable
  var count; // value for checking the break and session

// Complete clock layout
export class PomoClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {break: 5, session: 25};
    this.breakIncrease = this.breakIncrease.bind(this);
    this.sessionIncrease = this.sessionIncrease.bind(this);
    this.breakDecrease = this.breakDecrease.bind(this);
    this.sessionDecrease = this.sessionDecrease.bind(this);
    this.initialize = this.initialize.bind(this);
  }
  // Reset the values of the clock
  initialize(){
    this.setState({break:5, session: 25});
  }
  // Increase the break value by 1 aslong as break is less than 60
  breakIncrease(){
    count = this.state.break;
    if (count < 60) {
      this.setState({break: count + 1});
    }

  }
  // Decrease the break value by 1 aslong as break is more than zero
  breakDecrease(){
    count = this.state.break;
    if (count > 0) {
      this.setState({break: count - 1});
    }
  }
  // Increase the session value by 1 aslong as session is less than 60
  sessionIncrease(){
    count = this.state.session;
    if (count < 60) {
      this.setState({session: count + 1});
    }
  }
  // Decrease the session value by 1 aslong as session is more than zero
  sessionDecrease(){
    count = this.state.session;
    if (count > 0) {
      this.setState({session: count - 1});
    }
  }
  render(){
    var left = {id: "left", increment: "break-increment",decrement: "break-decrement",
                label: "Set Break",increase: this.breakIncrease, decrease: this.breakDecrease};
    var right= {id:"right", increment: "session-increment",decrement: "session-decrement",
                label: "Set Session",increase: this.sessionIncrease, decrease: this.sessionDecrease};
    var displayValues = {break: this.state.break, session: this.state.session};
    var clockControl = {initialize: this.initialize};
    return (
      <div id="clock">
        <Set {...left} />
        <Exhibit {...displayValues}/>
        <Set {...right}/>
        <Control {...clockControl}/>
        <audio id="beep" src="./audio/Alarm-clock-sound-short.mp3" type="audio/mp3" ></audio>
        <div id="logo">
          <a href="https://nhope123.github.io/pomodoro/" target="_blank" rel="noopener noreferrer" title=" Github repository">
            <i class="fa fa-rebel" aria-hidden="true"></i>
          </a>
        </div>
      </div>


    );
  }
}
