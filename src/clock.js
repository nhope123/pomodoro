import React from 'react';
import {Exhibit} from './display.js';
import {Set, Control} from './button.js';

// Complete clock layout
export class PomoClock extends React.Component{

  render(){
    var left = {increment: "break-increment",decrement: "break-decrement"};
    var right = {increment: "session-increment",decrement: "session-decrement"};
    return (
      <div>
        <Set {...{left}} />
        <Exhibit/>
        <Set {...{right}}/>
        <Control />
      </div>


    );
  }
}
