//import { Route, Routes } from "react-router-dom";
// import { Collectives } from "./Collectives";
// import { Companies } from "./Companies";
// import { Home } from "./Home";
// import { PageNotFound } from "./PageNotFound";
// import { Questions } from "./Questions";
// import { Tags } from "./Tags";
// import { Teams } from "./Teams";
// import { Users } from "./Users";

// import { Login } from "./Login";
// import { Signup } from "./Signup";
// import { ForgetPassword } from "./ForgetPassword";
// import { VerifyOTP } from "./VerifyOTP";
import React from "react";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Sidebar />
    </div>
  );
}

export default App;
