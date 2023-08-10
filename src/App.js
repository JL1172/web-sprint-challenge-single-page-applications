import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import PizzaForm from "./PizzaForm";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import Home from "./Home";

const StyledDiv = styled.div`
background-image : linear-gradient(to right, rgb(226, 146, 146),white);
`
const schema = yup.object().shape({
  name : yup.string().required("Name is required").min(2,"name must be at least 2 characters"),
  size : yup.string().oneOf(["small","medium","large"],"Must pick a size"),
  topping1 : yup.boolean(),
  topping2 : yup.boolean(),
  topping3 : yup.boolean(),
  topping4 : yup.boolean(),
  special : yup.string(),
})

const App = () => {
  //!slices of state
  const [formData,setFormData] = useState({name : "", size : "", topping1 : false, topping2 : false,
  topping3 : false,topping4 : false, special : ""})
  const [formErrors,setFormErrors] = useState({name : "", size : ""})
  const [disabled, setDisabled] = useState(true)
  //!slices of state
  //!handlers
  const formValidation = (name,value) => {
      yup.reach(schema,name).validate(value)
      .then(()=> setFormErrors({...formErrors, [name] : ""}))
      .catch(err=> setFormErrors({...formErrors, [name] : err.errors[0]}))
  }
  const change = evt => {
    const {name,value,type,checked} = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    formValidation(name,valueToUse);
    setFormData({...formData, [name] : valueToUse}); 
  }
  const submit = evt => {
    evt.preventDefault();
    // const newFriend = {
    //   name : formData.name,
    //   size : formData.size,
    //   topping1 : formData.topping1,
    // }
  }
  //!handlers
  //!useEffect
  useEffect(()=> {
    schema.isValid(formData).then(valid=> setDisabled(!valid))
  },[formData])
  //!useEffect
  const navigate = useNavigate();
  const nav = evt => {
      navigate("/pizza")
  }
  return (
    <>
    <StyledDiv>
          <Link to = "/">Home</Link>
            <h1>BloomEats</h1>
        </StyledDiv>
      <Routes>
        <Route path = "pizza/*" element = {<PizzaForm change = {change} 
        disabled ={disabled} formData = {formData} submit = {submit}
        formErrors = {formErrors}
        />}/>
        <Route path ="pizza/order-detail" element = {<OrderDetails />} />
        <Route path = "/" element = {<Home nav = {nav}/>}/>
      </Routes>
    </>
  );
};
export default App;
