import React from 'react';

export class Exhibit extends React.Component{
  render(){
    return(
      <section id="clock-face"> {/* circular face */}
        <div id="display-container"> {/* display container */}
          <div id="break-label" >Break</div>{/*Break length text display*/}
          <div id="session-label" >Session</div>{/* Session length display */}
          <div id="break-length" >5</div>{/* Break length display */}
          <div id="session-length" >25</div>{/* Session length display */}
          <div id="time-left" >25:00</div>{/* Session time display */}
          <div id="timer-label" >Session</div>{/* Session or Break text */}
        </div>
      </section>
    );
  }
}
