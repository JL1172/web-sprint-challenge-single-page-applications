import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {Card,CardBody,CardText,CardTitle} from "reactstrap";

const StyledDiv= styled.div`
display : flex;
justify-content : center;
align-items : center;
height : 100vh;

div {
    padding : 1rem;
}

img {
    width : 30px;
}
`
const Header = styled.div`
display : flex;
justify-content : space-between;
font-weight : bold;
`
const img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Collapse_Arrow_%2861412%29_-_The_Noun_Project.svg/2048px-Collapse_Arrow_%2861412%29_-_The_Noun_Project.svg.png";
const img2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Collapse_Arrow_%2861412%29_-_The_Noun_Project.svg/2048px-Collapse_Arrow_%2861412%29_-_The_Noun_Project.svg.png";


export default function OrderDetails(props) {
    const {orderInfo,randomNum,collapse,collapseOrExpand} = props;
    const result = collapse ? <img style = {{transition: ".3s"}} src = {img1} /> 
    : <img style = {{transition: ".3s",transform : "rotate(180deg)"}} src = {img2}/>;
    const navigate = useNavigate();
    const nav = () => {
        navigate("/")
        window.location.reload();
    }
    return (
        <StyledDiv>
        <Card>
            <CardTitle style = {{textDecoration : "underline"}}>
            <Header><>Order Details</><p onClick={nav}>Click here to leave this page</p></Header>
            </CardTitle>
            <CardBody>
                <CardText>Thanks <span style = {{color : "royalblue"}}>{orderInfo.name}</span> for your order, below is the verification number</CardText>
                <CardText style = {{color : "royalblue"}}>#{randomNum}{orderInfo.id}</CardText>
                <div onClick={collapseOrExpand}><strong>Press to expand order details {result}</strong></div>
                {collapse && <div style = {{transition : ".3s"}}>  <strong>Toppings :</strong>
                    <div>
                        {orderInfo.toppings && orderInfo.toppings.map((n,i)=> {
                            return <li key = {i}>{n}</li>
                        })}
                    </div>
                    <div><strong>Size :</strong> {orderInfo.size}</div>
                    <div><strong>Special Request : </strong>{orderInfo.special ? orderInfo.special : "N/A"}</div>
                </div>}
            </CardBody>
        </Card>
        </StyledDiv>
    )
}