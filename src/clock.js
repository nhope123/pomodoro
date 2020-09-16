import React from 'react';
import './clock.css';
import {Exhibit} from './display.js';
import {Set, Control} from './button.js';
import mp3 from './Alarm-clock-sound-short.mp3';
// Gobal variable
let timeValue; // value for checking the break and session
let timeLeftInterval;

// Complete clock layout
export class PomoClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {breakV: 5, session: 25,
                  timeDisplay: '25:00',
                  action: 'stop', timerLabel: 'Session', color: '#000000'};
    this.resetClock  = this.resetClock.bind(this);
    this.setIncrease = this.setIncrease.bind(this);
    this.setDecrease = this.setDecrease.bind(this);
    this.getCount    = this.getCount.bind(this);
    this.countDown   = this.countDown.bind(this);
    this.countEnd    = this.countEnd.bind(this);
    this.stopTimer   = this.stopTimer.bind(this);
    this.correctTime = this.correctTime.bind(this);
  }

  stopTimer(){
    //console.log('Before: ' + this.state.timeDisplay);
    clearInterval(timeLeftInterval);
    this.setState({action: 'pause'});
    //console.log('After: ' +this.state.timeDisplay);
  }

  countEnd(){
    var labelT;
    if (this.state.timerLabel === 'Session') {
      labelT = 'Break';
    }
    else {
      labelT = 'Session';
    }
    var audioPro = document.getElementById('beep').play();
    audioPro.then();
    this.setState(()=>{return {timeDisplay: '00:00',timerLabel: labelT}});
    clearInterval(timeLeftInterval);
    this.countDown();
    //console.log(this.state.timerLabel);
  }
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
      this.setState(()=>{return {action: 'play', timeDisplay: (this.correctTime(this.state.session) +':00'), color: 'black'}}); // ,timerLabel: 'Session'
    }
    else if(action === 'pause'){ // Check if clock was paused
      var value = this.state.timeDisplay.split(':');
      countTimer = (parseInt(value[0]) * 60) + parseInt(value[1]);
      this.setState(()=>{return {action: 'play'}});
    }
    else if (action === 'play') { // Check which count down was last ran
      if (this.state.timerLabel === 'Break') {
        countTimer = (this.state.breakV * 60);
        this.setState(()=>{return {timeDisplay: (this.correctTime(this.state.breakV) +':00'), color: 'black'}}); // timerLabel: 'Break',
      }
      else if (this.state.timerLabel === 'Session') {
        countTimer = (this.state.session * 60);
        this.setState(()=>{return {timeDisplay: (this.correctTime(this.state.session) +':00'), color: 'black'}});  // timerLabel: 'Session',
      }
    }
    return countTimer; // return the count down value
  }
  countDown(){
    //console.log('countDown is called');
    timeValue = this.getCount();
    //console.log( 'TimeValue is: ' + timeValue);
    var minutes;
    var seconds;
    timeLeftInterval = setInterval(()=>{
      //console.log( 'TimeValue is: ' + timeValue);
      if(timeValue > 0){
        timeValue--;
        minutes = Math.floor(timeValue / 60);
        seconds = (timeValue - (minutes * 60));
        if (minutes < 10) { minutes = '0' + minutes; }
        if (seconds < 10) { seconds = '0' + seconds; }
        //console.log('Minutes: '+minutes);
        //console.log('Seconds: '+ seconds);
        if (minutes === '00') {
          this.setState(()=>{return {timeDisplay: (minutes + ':' + seconds), color: 'red'}});
        }
        else {

          this.setState(()=>{ return{timeDisplay: minutes + ':' + seconds, color: 'black'}});
        }
      }
      else if (timeValue === 0) {
        this.countEnd();
      }
      console.log('Display value: ' +this.state.timeDisplay);

    },1000);


  }

  // Decrease the session or break length value
  setDecrease(event){
    var value = event.target.value;
    var breakValue = this.state.breakV;
    var sessionValue = this.state.session;
    if (value === 'break') {
      if(breakValue > 1){ this.setState(()=>{return {breakV: breakValue - 1 }});}
      if(breakValue < 1){ this.setState(()=>{return {breakV: 1 }});}
    }
    else if (value === 'session') {
      if(sessionValue > 1){ this.setState(()=>{return {session: sessionValue - 1 }});}
      if(sessionValue < 1){ this.setState(()=>{return {session: 1 }});}
    }
  }
  // Increase the session or break length value
  setIncrease(event){
    var value = event.target.value;
    var breakValue = this.state.breakV;
    var sessionValue = this.state.session;
    if (value === 'break') {
      if(breakValue <= 59 ){ this.setState(()=>{return {breakV: breakValue + 1 }});}
      else{ this.setState(()=>{return {breakV: 60 }});}
    }
    else if (value === 'session') {
      if(sessionValue <= 59){ this.setState(()=>{return {session: sessionValue + 1 }});}
      else{ this.setState(()=>{return {session: 60 }});}
    }
  }
  // Stop the timer and initialize variables
  resetClock(){
    clearInterval(timeLeftInterval);
    var audioEL = document.getElementById('beep');
    audioEL.pause();
    audioEL.currentTime = 0;
    this.setState(()=>{
      return({breakV: 5, session: 25, timeDisplay: '25:00',
              action: 'stop', timerLabel: 'Session', color: '#000000'} )});
  }

  render(){
    var playIcon;
    var playFunction;
    var action = this.state.action;
    if(action === 'pause' || action === 'stop'){
      playIcon = "fa fa-play-circle";
      playFunction = this.countDown;
    }
    else if (action === 'play') {
      playIcon = "fa fa-pause-circle";
      playFunction = this.stopTimer;
    }

    var left = {id: "left", increment: "break-increment",decrement: "break-decrement",value: 'break',
                label: "Set Break",increase: this.setIncrease, decrease: this.setDecrease};
    var right= {id:"right", increment: "session-increment",decrement: "session-decrement", value: 'session',
                label: "Set Session",increase: this.setIncrease, decrease: this.setDecrease};
    var displayValues = {breakV: this.state.breakV, session: this.state.session,
                         mins: this.state.timeDisplay,
                         timeLabel: this.state.timerLabel, color: this.state.color}; // mins: this.state.min, secs: this.state.sec
    var clockControl = {initialize: this.resetClock, update: playFunction, icon: playIcon};
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
