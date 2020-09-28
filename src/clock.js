import React from 'react';
import './clock.css';
import {Exhibit} from './display.js';
import {Set, Control} from './button.js';
import mp3 from './Alarm-clock-sound-short.mp3';

// Gobal variable
let timeValue; // value for checking the break and session
let timeLeftInterval; // variable for setting and clearing the iteration intervals
let count; // testing varable

// Complete clock layout Component
export class PomoClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {breakV: 5, session: 25,
                  timeDisplay: "25:00", action: 'stop',
                  timerLabel: 'Session', color: '#000000'};
    this.resetClock  = this.resetClock.bind(this);
    this.getCount    = this.getCount.bind(this);
    this.countDown   = this.countDown.bind(this);
    this.countEnd    = this.countEnd.bind(this);
    this.stopTimer   = this.stopTimer.bind(this);
    this.correctTime = this.correctTime.bind(this);
    this.sessionIncrease = this.sessionIncrease.bind(this);
    this.sessionDecrease = this.sessionDecrease.bind(this);
    this.breakIncrease = this.breakIncrease.bind(this);
    this.breakDecrease = this.breakDecrease.bind(this);
    this.setPauseDisplay = this.setPauseDisplay.bind(this);
  }
  // Stop / pause the timer
  stopTimer(){
    clearInterval(timeLeftInterval);
    this.setState(()=>{return {action: 'pause'}});
  }
  // Process the completed counter and play alarm
  countEnd(){
    var labelT = (this.state.timerLabel === 'Session')?  'Break' : 'Session';
    var audioPro = document.getElementById('beep').play();
    audioPro.then();
    clearInterval(timeLeftInterval);
    this.setState(()=>{return {timeDisplay: '00:00',timerLabel: labelT}});
    this.countDown();
  }
  // Add a zero before all single digit numbers
  correctTime(num){
    var number = num < 10 ? ('0'+ num) :num;
    return number;
  }
  // Create the value to start counting from
  getCount(){
    var action = this.state.action;
    var countTimer;
    if(action === 'stop'){  // check if clock just loaded or clock was reset
      countTimer = this.state.session * 60;
      this.setState(()=>{return {action: 'play', timeDisplay: (this.correctTime(this.state.session) +':00'), color: 'black'}});
    }
    else if(action === 'pause'){ // Check if clock was paused;
      var value = this.state.timeDisplay.split(':');
      countTimer = (parseInt(value[0]) * 60) + parseInt(value[1]);
      this.setState(()=>{return {action: 'play'}});
    }
    else if (action === 'play') { // Check and toggle between break and session counter
      if (this.state.timerLabel === 'Break') {
        countTimer = (this.state.breakV * 60);
        this.setState(()=>{return {timeDisplay: (this.correctTime(this.state.breakV) +':00'), color: 'black'}});
      }
      else if (this.state.timerLabel === 'Session') {
        countTimer = (this.state.session * 60);
        this.setState(()=>{return {timeDisplay: (this.correctTime(this.state.session) +':00'), color: 'black'}});
      }
    }
    return countTimer; // return the count down value
  }
  // Count down and display timer values
  countDown(){
    // Get converted time
    timeValue = this.getCount();
    var minutes;
    var seconds;
    timeLeftInterval = setInterval(()=>{
      if(timeValue > 0){  // Once the time has not ran out reduce by 1 and get display time
        timeValue--;
        minutes = Math.floor(timeValue / 60);
        seconds = (timeValue - (minutes * 60));
        // Adjust time for mm:ss format
        if (minutes < 10) { minutes = '0' + minutes; }
        if (seconds < 10) { seconds = '0' + seconds; }
        // Change timer to red for time less than 1min
        if (minutes === '00') {
          this.setState(()=>{return {timeDisplay: (minutes + ':' + seconds), color: 'red'}});
        }
        else {
          this.setState(()=>{ return{timeDisplay: minutes + ':' + seconds, color: 'black'}});
        }
      }
      else if (timeValue === 0) { // End iteration
        this.countEnd();
      }
    },1000);
  }
  // Display ajusted timer when stopped and paused
  setPauseDisplay(val, setType){
    if(this.state.action === 'pause' || this.state.action === 'stop'){
      if (setType === 'break' && this.state.timerLabel === 'Break') {
        this.setState(()=>{return{timeDisplay: val}});
      }
      if (setType === 'session' && this.state.timerLabel === 'Session') {
        this.setState(()=>{return{timeDisplay: val}});
      }
    }
  }
  // Decrease the Break length value
  breakDecrease(){
    count =  (this.state.breakV >= 2)? (this.state.breakV - 1) : 1 ;
    this.setState( {breakV: count });
    this.setPauseDisplay(count + ':00', 'break');
  }
  // Decrease the session length value
  sessionDecrease(){
    count = (this.state.session >= 2)? (this.state.session - 1 ) : 1 ;
    this.setState( {session: count });
    this.setPauseDisplay(count + ':00', 'session');
  }
  // Increase the Break length value
  breakIncrease(){
    count = (this.state.breakV <= 59)? (this.state.breakV + 1 ) : 60 ;
    this.setState( {breakV: count });
    this.setPauseDisplay(count + ':00', 'break');
  }
  // Increase the session length value
  sessionIncrease(){
    count = (this.state.session <= 59)? (this.state.session + 1 ) : 60 ;
    this.setState( {session: count });
    this.setPauseDisplay(count + ':00', 'session');
  }
  // Stop the timer and initialize variables
  resetClock(){
    clearInterval(timeLeftInterval); // Stop timer
    this.setState(()=>{return {breakV: 5, session: 25, timeDisplay: '25:00',
              action: 'stop', timerLabel: 'Session', color: '#000000'}} ); // Reset values
    var audioEL = document.getElementById('beep'); // stop and rewind audio
    audioEL.pause();
    audioEL.currentTime = 0;
  }
  render(){
    var playIcon;
    var playFunction;
    var action = this.state.action;
    // Toogle play and pause icons
    if(action === 'pause' || action === 'stop'){
      playIcon = "fa fa-play-circle";
      playFunction = this.countDown;
    }
    else if (action === 'play') {
      playIcon = "fa fa-pause-circle";
      playFunction = this.stopTimer;
    }
    // Values for the Break length Components
    var left = {id: "left", increment: "break-increment",decrement: "break-decrement",
                label: "Set Break",increase: this.breakIncrease, decrease: this.breakDecrease};
    // Values for the Session length Components
    var right= {id:"right", increment: "session-increment",decrement: "session-decrement",
                label: "Set Session",increase: this.sessionIncrease, decrease: this.sessionDecrease};
    // Values for the Display Components
    var displayValues = {breakV: this.state.breakV, session: this.state.session,
                         mins: this.state.timeDisplay,
                         timeLabel: this.state.timerLabel, color: this.state.color};
    // Values for the Control Components
    var clockControl = {initialize: this.resetClock, update: playFunction, icon: playIcon};
    return (
      <div id="clock">
        <Set {...left} />
        <Exhibit {...displayValues}/>
        <Set {...right}/>
        <Control {...clockControl}/>
        <audio id="beep"  src={mp3} type='audio/mpeg' > </audio>
        <div id="logo">
          <a href="https://github.com/nhope123/pomodoro" target="_blank" rel="noopener noreferrer" title=" Github repository">
            <i className="fa fa-rebel" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}
