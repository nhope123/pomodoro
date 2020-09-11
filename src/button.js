import React from 'react';


export class Set extends React.Component{

  render(){
    var increase = this.props.label + " length increase";
    var decrease = this.props.label + " length decrease";
    return(
      <section id={this.props.id} className="section-set">
        <button id={this.props.increment} type="button" title={increase} >
          <i class="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
        <div >{this.props.label}</div>
        <button id={this.props.decrement} type="button"  title={decrease}>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </section>
    );
  }
}

class Operator extends React.Component{

  render(){
    return(
      <article className={this.props.control}>
        <button id={this.props.id} type="button" tabindex="0" >
          <i className={this.props.icon}  aria-hidden="true"></i>
        </button>
        <div>{this.props.display}</div>
      </article>
    );
  }

}

export class Control extends React.Component{

  render(){
    return (
      <section id="control">
        <Operator {...{id: "start_stop",icon: "fa fa-play-circle", display:"Play/Pause",control:"left-control" }} />
        <Operator {...{id: "reset",icon: "fa fa-refresh", display: "Reset", control: "right-control"}} />
      </section>
    );
  }
}
