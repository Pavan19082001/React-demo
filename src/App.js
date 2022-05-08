import {Component} from "react";
import FunctionalComponent from "./Components/functionalComponent";
import ClassComponent from "./Components/classComponent";
import Counter from "./Components/counter";
import EventHandling from "./Components/EventHandling";
import BindingEventHandler from "./Components/BindingEventHandlers";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from "./forms/Signin";
import SignUp from "./forms/SignUp";
import UserRegistration from "./Components/UserRegistration";
import AxiosRequest from "./Http/AxiosRequest";
//import UseReducer from "./Components/Hooks/useReducer";
import UseEffect from "./Components/Hooks/useEffect";
import UseRef from "./Components/Hooks/UseRef";
import UseContextDemo from "./Components/UseContext/useContextDemo";
import ParentComp from "./Components/PureComponents/ParentComp";

class App extends Component{
  render(){
    return(
      <div className="App">
        <BindingEventHandler></BindingEventHandler>
        <EventHandling></EventHandling>
      <ClassComponent></ClassComponent>
      <br></br>
      <Counter></Counter>
      <br></br>

      {/*Learning to use Props...*/}
      <FunctionalComponent name="Bruce" heroName="Batman">
        <p>This is an intro to the usage of props in functional components...</p>
      </FunctionalComponent>
      <FunctionalComponent name="Clark" heroName="Superman"></FunctionalComponent>
      <FunctionalComponent name="Diana" heroName="Wonder Woman">
        <button className="btn btn-primary">Action</button>
      </FunctionalComponent>
      {/*Routes...*/}
      <BrowserRouter>
          <Routes>
              <Route path="/purecomponents" element={<ParentComp/>} />
              <Route path="/usecontext" element={<UseContextDemo/>} />
              <Route path="/ref" element={<UseRef/>} />
              <Route path="/hooks" element={<UseEffect/>} />
              <Route path="/signin" element={<Signin/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/user" element={<UserRegistration/>} />
              <Route path="/" element={<AxiosRequest/>} />
          </Routes>
      </BrowserRouter>
    </div>
    );
  };
}
export default App
