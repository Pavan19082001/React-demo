import { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "Pavan",
    }
  };
  componentDidMount() {
    setInterval(()=>{
      this.setState({ name: "Pavan" });
    }, 3000);
  };
  render() {
    console.log("******** Parent Component Render ********");
    return (
      <div>
          <h1>Parent Component</h1>
          <RegComp />
          <PureComp />
      </div>
    )
  }
}

export default ParentComp