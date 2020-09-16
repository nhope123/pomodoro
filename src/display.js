import React from 'react';

export class Exhibit extends React.Component{
  render(){
    return(
      <section id="clock-face"> {/* circular face */}
        <div id="display-container"> {/* display container */}
          <div id="break-label" >Break</div>{/*Break length text display*/}
          <div id="session-label" >Session</div>{/* Session length display */}
          <div id="break-length" >{this.props.breakV}</div>{/* Break length display */}
          <div id="session-length" >{this.props.session}</div>{/* Session length display */}
          <div id="time-left" style={{color: this.props.color}} >{this.props.mins}{/*:{this.props.secs}*/}</div>{/* Session time display */}
          <div id="timer-label" >{this.props.timeLabel}</div>{/* Session or Break text */}
        </div>
      </section>
    );
  }
}
