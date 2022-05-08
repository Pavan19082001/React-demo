/* import React from 'react'

function EventHandling() {
    function clickHandler(){
        console.log("Button clicked");
    };
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default EventHandling */

//Event Handling using class component

import React, { Component } from 'react'

export class EventHandling extends Component {
    clickHere(){
        console.log("clicked the button")
    };
  render() {
    return (
      <div>
          <button onClick={this.clickHere}>Click me</button>
      </div>
    )
  }
}

export default EventHandling