import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./component/Home";

// import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      WELCOME TO USER LOGIN & REGISTER
      {/* <Navbar />
      <div style={{display:'inline'}}>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/JK" element={Login}></Route>
        <Route path="/LK" element={Register}></Route>
      </Routes> */}
      {/* </div> */}
      <Register/>
      <Login/>
    </div>
  );
}

export default App;
