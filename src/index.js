import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import CompanyInfo from './component/CompanyInfo';
import NavBar from './component/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="root">
    <BrowserRouter>
    <NavBar />

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/company-info" element={<CompanyInfo/>} />
      </Routes>
    </BrowserRouter>

  </div>
);


