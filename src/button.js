import React from 'react';


export class Set extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section className="section-set">
        <button id={this.props.increment} type="button" >
          <i class="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
        <div >{/* {this.props.label} */} text</div>
        <button id={this.props.decrement} type="button" >
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </section>
    );
  }
}

export class Control extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section>
        <button id="start_stop" type="button" tabindex="0" >
          <i class="fa fa-play-circle" aria-hidden="true"></i>
        </button>
        <button id="reset" type="button" tabindex="0" >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </section>
    );
  }
}
