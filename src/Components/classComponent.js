import {Component} from "react";

class ClassComponent extends Component{
    
    constructor(){
        super();
        this.state = {
            message: "Welcome Visitor",
        }
    }
    changeMessage = () =>{
        this.setState({
            message: "Thankyou for subscribing",
        })
    }
    render(){
        return(
            <div><h1>Demo for Class Component</h1>

            {/*using state in class component...*/}
            <h2>{this.state.message}</h2>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>

            </div>
        );
    };
}
export default ClassComponent 