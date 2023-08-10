import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import Home from "./Home";
import PizzaForm from "./PizzaForm";

const StyledDiv = styled.div`

`

const App = () => {
  return (
    <>
      <Link to = "/">Home</Link>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "pizza" element = {<PizzaForm />}/>
      </Routes>
    </>
  );
};
export default App;
