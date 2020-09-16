import React from 'react';
import './clock.css';
import {Exhibit} from './display.js';
import {Set, Control} from './button.js';
import mp3 from './Alarm-clock-sound-short.mp3';
// Gobal variable
let count; // value for checking the break and session
let timeLeftInterval;

// Complete clock layout
export class PomoClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {break: 5, session: 25,
                  timeDisplay: '25:00',
                  min: '25', sec: '00',
                  action: 'play', timerLabel: 'Session', color: '#000000'};
    this.breakIncrease = this.breakIncrease.bind(this);
    this.sessionIncrease = this.sessionIncrease.bind(this);
    this.breakDecrease = this.breakDecrease.bind(this);
    this.sessionDecrease = this.sessionDecrease.bind(this);
    this.initialize = this.initialize.bind(this);
    this.calculateEndTime = this.calculateEndTime.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }
  stopTimer(){
    clearInterval(timeLeftInterval);
    this.setState({action: 'play'});
  }

  // Calculate the end time to count too
  calculateEndTime(){
    var timeValue = new Date(0);

    var minns = this.state.timeDisplay;
    var min = minns.split(':');
    timeValue.setMinutes(timeValue.getMinutes() + parseInt(min[0]));
    timeValue.setSeconds(timeValue.getSeconds() + parseInt(min[1]));

    /* var mins = parseInt(this.state.min);
    var secs = parseInt(this.state.sec);
    timeValue.setMinutes(timeValue.getMinutes() + mins);
    timeValue.setSeconds(timeValue.getSeconds() + secs); */
    return timeValue;
  }
  // Update the time left
  updateTimer(){
    this.setState({action: 'pause'});
    var audioElement = document.getElementById('beep');
    audioElement.load();
    var endTime = this.calculateEndTime();
    var startTime = new Date(0);
    var timeDifference = endTime - startTime;

    var that = this;
    timeLeftInterval = setInterval(function(){

      timeDifference -= 1000;
      var mins=(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      var secs = Math.floor((timeDifference % (1000 * 60)) / 1000);
      if(mins < 10 && mins >= 0){ mins = '0' + mins;}
      if(secs < 10 && secs >= 0){ secs = '0' + secs;}



      that.setState(()=>{return {timeDisplay: (mins + ':' + secs)};});
      if(mins === '00'){
        that.setState((()=>{return{color: '#ff0000'}}));
      }
      else{
        that.setState((()=>{return{color: '#000000'}}));
      }

      if(mins === '00' && secs === '00'){

        audioElement.play();
        if(that.state.timerLabel === 'Session'){
        that.setState(()=>{return {timerLabel: 'Break', timeDisplay: (that.state.break + ':00') }});
        }
        else {
          that.setState(()=>{return {timerLabel: 'Session', timeDisplay: (that.state.session + ':00')}});
        }



    /*  that.setState(timeDifference =>{
        return ({min: mins, sec: secs});}
      );
      if(that.state.min === '00'){
        that.setState((()=>{return{color: '#ff0000'}}));
      }
      else{
        that.setState((()=>{return{color: '#000000'}}));
      }
      if(that.state.min === '00' && that.state.sec === '00'){

        audioElement.play();
        if(that.state.timerLabel === 'Session'){
        that.setState(()=>{return {timerLabel: 'Break', min: that.state.break}});
        }
        else {
          that.setState(()=>{return {timerLabel: 'Session', min: that.state.session}});
        }  */

        that.stopTimer();
        that.updateTimer();
      }


    }, 1000);
  }
  // Reset the values of the clock
  initialize(){
    this.stopTimer();
    var audioEL = document.getElementById('beep');
    audioEL.pause();
    audioEL.currentTime = 0;
    this.setState({break: 5, session: 25,
                  timeDisplay: '25:00',
                  action: 'play', timerLabel: 'Session', color: '#000000'});//  min: '25', sec: '00',
  }
  // Increase the break value by 1 aslong as break is less than 60
  breakIncrease(){
    count = this.state.break;
    if (count < 60) {
      this.setState({break: count + 1});
    }
    if(count >= 60){this.setState({break: 59});}

  }
  // Decrease the break value by 1 aslong as break is more than zero
  breakDecrease(){
    count = this.state.break;
    if (count > 1) {
      this.setState({break: count - 1});
    }
    if(count <= 0){this.setState({break: 1});}
  }
  // Increase the session value by 1 aslong as session is less than 60
  sessionIncrease(){
    count = this.state.session;
    if (count < 60) {
      this.setState({session: count + 1});
    }
    if(count >= 60){this.setState({session: 59});}
  }
  // Decrease the session value by 1 aslong as session is more than zero
  sessionDecrease(){
    count = this.state.session;
    if (count > 1) {
      this.setState({session: count - 1});
    }
    if(count <= 0){this.setState({session: 1});}
  }
  render(){
    var playIcon;
    var playFunction;
    if(this.state.action === 'play'){
      playIcon = "fa fa-play-circle";
      playFunction = this.updateTimer;
    }
    else if (this.state.action === 'pause') {
      playIcon = "fa fa-pause-circle";
      playFunction = this.stopTimer;
    }

    var left = {id: "left", increment: "break-increment",decrement: "break-decrement",
                label: "Set Break",increase: this.breakIncrease, decrease: this.breakDecrease};
    var right= {id:"right", increment: "session-increment",decrement: "session-decrement",
                label: "Set Session",increase: this.sessionIncrease, decrease: this.sessionDecrease};
    var displayValues = {break: this.state.break, session: this.state.session,
                         mins: this.state.timeDisplay,
                         timeLabel: this.state.timerLabel, color: this.state.color}; // mins: this.state.min, secs: this.state.sec
    var clockControl = {initialize: this.initialize, update: playFunction, icon: playIcon};
    return (
      <div id="clock">
        <Set {...left} />
        <Exhibit {...displayValues}/>
        <Set {...right}/>
        <Control {...clockControl}/>
        <audio id="beep"  src={mp3} type='audio/mpeg' > </audio>
        <div id="logo">
          <a href="https://nhope123.github.io/pomodoro/" target="_blank" rel="noopener noreferrer" title=" Github repository">
            <i className="fa fa-rebel" aria-hidden="true"></i>
          </a>
        </div>
      </div>


    );
  }
}
