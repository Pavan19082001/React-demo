import React, { Component } from 'react'

class BindingEventHandlers extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello",
      }
    };
    clickHandler(){
        this.setState({
            message: "Good Bye!"
        }) 
    }
  render() {
    return (
      <div>
          <h2>{this.state.message}</h2>
          {/*binding in the render method...*/}
          {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}

          <button onClick={()=>this.clickHandler.bind(this)}>BindingEvent</button>
      </div>
    )
  }
}

export default BindingEventHandlers