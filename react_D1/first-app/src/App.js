// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;




// import React, { Component } from "react";
// import "./Test.css";

// const App = () => {
//   return (
//     <div>
//       <h1 id="test">Hello, I am Abantika</h1>
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import AllUserList from "./components/AllUserList";

// const App = () => {
//   return (
//     <div>
//       <h1>This is App Component</h1>
//       <SignUpForm />
//     </div>
//   );
// };

// export default App;


//class Test extends Component{
  // render(){
  //   console.log("Hello");
  //   return (
  //     <div>
  //       <h1
  //        id = "testId"
  //        style= {{color: "red",
  //       backgroundColor: "yellow", 
  //   }}
  //   >
  //     Hello, I am Abantika</h1>
  //     </div>
  //   );
  // }


  //state = {
   // isLoggedIn = false;
  //};

//   state = { isLoggedIn: false };

//   render() {
//     return (
//       <div>
//         {!this.isLoggedIn ? (
//         <h1>You are not Logged In!</h1>
//         ) : (
//         <h1>Congratulations, you are logged in!</h1>
//         )}
//         <button onClick={(e) => this.setState({ isLoggedIn: true })}>Login!</button>
//       </div>
//     );
//   }
// }

//export default Test;




import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import SumNumbers from "./components/SumNumbers";
import TaskScreen from "./components/TaskScreen";
import CounterComponent from "/components/CounterComponent";
import Photos from "./components/Photos";
import higherOrderComponent from "./components/HOC";

const App = () => {
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>;
  });
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<h1>This is on Home Page</h1>}/>
        <Route path={"/contact"} element={<h1>This is on Contact Page</h1>}/>
        <Route path={"/about"} element={<h1>This is on About Page</h1>}/>
        <Route path={"/signup"} element={<h1Signature />} /> 
        <Route path={"sum"} element={<SumNumbers />} />
        <Route path={"tasks"} element={<TaskScreen />} />
        <Route path={"/counter"} element={<CounterComponent />} />
        <Route path={"/photos"} element={<Photos />} />
        <Route path={"/test"} element={<TestApp />} />
        <Route path={"/test"} element={<SampleRenderProps />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;