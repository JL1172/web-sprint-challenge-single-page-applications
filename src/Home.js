import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import PizzaForm from "./PizzaForm";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import OrderDetails from "./OrderDetails";


export default function Home(props) {
    const {nav} = props;
    return (
        <div>
             <button onClick={nav}>Order Now</button>
        </div>
    )
}