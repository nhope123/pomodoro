import React from 'react';
import {Exhibit} from './display.js';
import {Set, Control} from './button.js';

// Complete clock layout
export class PomoClock extends React.Component{

  render(){
    var left = {id: "left", increment: "break-increment",decrement: "break-decrement", label: "Break"};
    var right= {id:"right", increment: "session-increment",decrement: "session-decrement", label: "Session"};
    return (
      <div id="p-clock">
        <Set {...left} />
        <Exhibit/>
        <Set {...right}/>
        <Control />
        <audio id="beep" src="./audio/Alarm-clock-sound-short.mp3" type="audio/mp3" ></audio>
      </div>


    );
  }
}
