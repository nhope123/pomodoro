import React from 'react';

// Component containing elements for setting the break and session lengths
export class Set extends React.Component{
  render(){
    var increase = this.props.label + " length increase";
    var decrease = this.props.label + " length decrease";
    return(
      <section id={this.props.id} className="section-set">
        <button id={this.props.increment} type="button" title={increase} tabIndex="0" onClick={this.props.increase} >
          <span className="fa fa-chevron-up" aria-hidden="true" onClick={this.props.increase} ></span>
        </button>
        <div >{this.props.label}</div>
        <button id={this.props.decrement} type="button"  title={decrease} tabIndex="0" onClick={this.props.decrease} >
          <span className="fa fa-chevron-down" aria-hidden="true" onClick={this.props.decrease}></span>
        </button>
      </section>
    );
  }
}
// Control sub-Component responsible for activation or deactivation of the timer
class Operator extends React.Component{
  render(){
    return(
      <article className={this.props.control}>
        <button id={this.props.id} type="button" tabIndex="0" onClick={this.props.callBack}>
          <i className={this.props.icon}  aria-hidden="true"></i>
        </button>
        <div>{this.props.display}</div>
      </article>
    );
  }
}
// Component for controling the activation and deactivation of the timer
export class Control extends React.Component{

  render(){
    // Values for the play and pause button
    var playOperator = {id: "start_stop",icon: this.props.icon,
                        display:"Play/Pause", control:"left-control",
                        callBack: this.props.update };
    // Values for the reset button
    var resetOperator = {id: "reset", icon: "fa fa-refresh",
                         display: "Reset", control: "right-control",
                         callBack: this.props.initialize};
    return (
      <section id="control">
        <Operator {...playOperator} />
        <Operator {...resetOperator} />
      </section>
    );
  }
}
