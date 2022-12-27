import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contactus from "./component/Contactus";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import Logout from "./component/Logout";
import NotFound from "./component/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Adduser from './component/crud/Adduser';
import Edit from "./component/crud/Edit";
import View from "./component/crud/View";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/** protected route dashboard**/}
        <Route
          exact
          path="/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/add" element={<Adduser />} />
        <Route exact path="/edit/:id" element={<Edit/>} />
        <Route exact path="/view/:id" element={<View/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
