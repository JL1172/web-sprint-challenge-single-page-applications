import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import Home from "./Home";
import PizzaForm from "./PizzaForm";
import * as yup from "yup";

const StyledDiv = styled.div`

`
const schema = yup.object().shape({
  name : yup.string().min(2,"name must be at least 2 characters")
})

const App = () => {
  //!slices of state
  const [formData,setFormData] = useState({name : "", size : "", topping1 : false, topping2 : false, special : ""})
  const [formErrors,setFormErrors] = useState({name : "", size : "", topping1 : "", topping2 : "", special : ""})
  const [disabled, setDisabled] = useState(true)
  //!slices of state
  //!handlers
  const formValidation = (name,value) => {
      yup.reach(schema,name).validate(value)
      .then(()=> setFormErrors({...formErrors, [name] : ""}))
      .catch(err=> setFormErrors({...formErrors, [name] : err.errors[0]}))
  }
  const change = evt => {
    const {name,value, checked} = evt.target;
    const valueToUse = evt.target.type === "checkbox" ? checked : value;
    formValidation(name,valueToUse);
    setFormData({...formData, [name] : valueToUse}); 
  }
  const submit = evt => {
    evt.preventDefault();
  }
  //!handlers
  //!useEffect
  useEffect(()=> {
    schema.isValid(formData).then(valid=> setDisabled(!valid))
  },[formData])
  //!useEffect
  return (
    <>
      <Link  id = "order-pizza" to = "/">Home</Link>
      <Link to = "pizza">Order Now</Link>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "pizza" element = {<PizzaForm change = {change} 
        disabled ={disabled} formData = {formData} submit = {submit}
        />}/>
      </Routes>
    </>
  );
};
export default App;
