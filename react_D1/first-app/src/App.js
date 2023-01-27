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



import React from "react";
import AllUserList from "./components/AllUserList";

const App = () => {
  return (
    <div>
      <AllUserList />
    </div>
  );
};

export default App;


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