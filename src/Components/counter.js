import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          count: 0,
      }
    }

   /*  Increase(){
        this.setState({
            count: this.state.count + 1,
        });
    } */

    incrementFive(){
        this.setState({
            count: this.state.count +5,
        }, ()=>{console.log(`incremented value is ${this.state.count}`)});
    }
  render() {
    return (
      <div>count - {this.state.count}
      <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter