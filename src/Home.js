import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import PizzaForm from "./PizzaForm";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import Reactstrap from "reactstrap";
import {Card,CardBody,CardTitle} from "reactstrap";

const Div = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
height : 100vh;
background-color : azure;
div {
    width : 50%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-content : space-around;
}
img {
    height : 200px;
    width : 200px;
    margin-left : 23rem;
    margin-bottom : 3rem;
}
input {
    padding : .5rem;
    border-radius : 10px;
    border : none;
    outline : 2px solid lightblue;
    background-color : lightcyan;
    transition : .1s ease-in-out;
    &:hover {
        outline-offset : 4px;
        transition : .1s ease-in-out;
    }
    &:active {
        outline-width : 4px;
        outline-offset : 8px;
    }
}
`

export default function Home(props) {
    const {nav,imgUrl} = props;
    return (
        <Div>
        <div>
            <img src = {imgUrl} />
             <input onClick={nav} type = "submit" value = "Order Now"/>
        </div>
        </Div>
    )
}