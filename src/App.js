import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/HomePage";
import Member from "./components/Pages/MemberPage";
import Update from "./components/Pages/UpdatePage";
import Service from "./components/Pages/ServicePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/members" element={<Member />}></Route>
            <Route exact path="/updates" element={<Update />}></Route>
            <Route exact path="/service" element={<Service />}></Route>
          </Routes>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
