import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/SignUp";
import LoginAdmin from "./Components/LoginAdmin/LoginAdmin";
import HomeMain from "./Components/Pages/HomeMain";
import AddEdit from "./Components/Pages/AddEdit";

import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/Login" element={<Login/>} /> */}
          <Route path="/home" element={<Home name={userName} />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route exact path="/HomeMain" element={<HomeMain />} />
          <Route exact path="/addEdit" element={<AddEdit />} />
          <Route exact path="/update/:id" element={<AddEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
