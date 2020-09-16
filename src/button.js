import React from 'react';


export class Set extends React.Component{

  render(){
    var increase = this.props.label + " length increase";
    var decrease = this.props.label + " length decrease";
    return(
      <section id={this.props.id} className="section-set">
        <button id={this.props.increment} type="button" title={increase} tabIndex="0" onClick={this.props.increase} value={this.props.value}>
          <i className="fa fa-chevron-up" aria-hidden="true" ></i>
        </button>
        <div >{this.props.label}</div>
        <button id={this.props.decrement} type="button"  title={decrease} tabIndex="0" onClick={this.props.decrease} value={this.props.value}>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </section>
    );
  }
}

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

export class Control extends React.Component{

  render(){
    var playOperator = {id: "start_stop",icon: this.props.icon,
                        display:"Play/Pause", control:"left-control",
                        callBack: this.props.update };
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
