import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import PizzaForm from "./PizzaForm";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import Home from "./Home";
import pizzas from "./Pizza";
import axios from "axios";

const StyledDiv = styled.div`
background-image : linear-gradient(45deg, lightblue, skyblue, white);
display : flex;
align-items : center;
img {
  height : 35px;
}
`
const schema = yup.object().shape({
  name : yup.string().required("Name is required").min(2,"name must be at least 2 characters"),
  size : yup.string().oneOf(["small","medium","large"],"Must pick a size"),
  topping1 : yup.boolean(),
  topping2 : yup.boolean(),
  topping3 : yup.boolean(),
  topping4 : yup.boolean(),
  special : yup.string(),
});
const initialValue = {name : "", size : "", topping1 : false, topping2 : false,
topping3 : false,topping4 : false, special : ""}
function App() {
  //!slices of state
  const [formData,setFormData] = useState(initialValue);
  const [formErrors,setFormErrors] = useState({name : "", size : ""});
  const [disabled, setDisabled] = useState(true);
  const [imgUrl,setImgUrl] = useState('');
  const [orderInfo,setOrderInfo] = useState([]);
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
  // async function postData(newOrder) {
  //   const res = await axios.post(" https://reqres.in/api/users",newOrder)
  //   try {
  //     setOrderInfo([res.data,...orderInfo])
  //     setFormData(initialValue)
  //   } catch {
  //     console.error(new Error)
  //   }
  // }
  const navigate2 = useNavigate();
    const nav1 = () => {
        navigate2("pizza/order-detail")
    }
  const submit = evt => {
    evt.preventDefault();
    const newOrder = {
      name : formData.name,
      size : formData.size,
      topping1 : formData.topping1,
      topping2 : formData.topping2,
      topping3 : formData.topping3,
      topping4 : formData.topping4,
      special : formData.special,
    }
    axios.post(" https://reqres.in/api/users",newOrder)
    .then((res)=> {
      console.log(res)
      setOrderInfo([res.data,...orderInfo])
      nav1();
    })
    .catch(err=> {
      console.error(err)
    })
  }
  //!handlers
  //!useEffect
  useEffect(()=> {
    schema.isValid(formData).then(valid=> setDisabled(!valid))
  },[formData])
  useEffect(()=> {
    setImgUrl(imgUrl => imgUrl = pizzas[Math.floor(Math.random()*4)].src);
    },[])
  //!useEffect
  const navigate = useNavigate();
  const nav = evt => {
      navigate("/pizza")
  }
  return (
    <>
    <StyledDiv>
          <Link to = "/"><img src = "https://www.svgrepo.com/show/347172/menu-4.svg"/></Link>
            <h1>BloomEats</h1>
        </StyledDiv>
      <Routes>
        <Route path = "pizza/*" element = {<PizzaForm change = {change} 
        disabled ={disabled} formData = {formData} submit = {submit}
        formErrors = {formErrors}
        />}/>
        <Route path ="pizza/order-detail" element = {<OrderDetails orderInfo = {orderInfo} />} />
        <Route path = "/" element = {<Home imgUrl = {imgUrl} nav = {nav}/>}/>
      </Routes>
    </>
  )
};

export default App;
