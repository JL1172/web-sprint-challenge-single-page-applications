import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { keyframes } from "styled-components"

const kf = keyframes`
50% {
    outline-offset : .2em;
}
100% {
    outline-offset : .5em;
}
`

const StyledDiv = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
height : 100vh;
background-color : azure;
form {
    border : none;
    border-radius : 15px;
    background-image : linear-gradient(45deg, lightsteelblue,lightsteelblue);
    display : flex;
    flex-direction : column;
    align-items : baseline;
    padding : 8rem;
    input:nth-of-type(1),input:nth-of-type(5),input:nth-of-type(6),select {
        margin-bottom : 2rem;
    }
    input[type=text],select {
       border : none;
       margin-top : .2rem;
       outline : none;
       padding : .5rem;
       outline : 2px solid lavenderblush;
       border-radius : 5px; 
       &:focus {
        outline-offset : 4px;
        outline-style : dashed;
        transition : .1s ease-out;
       }
    }
}
`

export default function Pizza(props) {
    const { disabled, formData, change, submit, formErrors } = props;
    const { name, size, topping1, topping2, topping3, topping4, special } = formData;

    return (
        <StyledDiv>
            <div>
                <form onSubmit={submit} id="pizza-form">
                    <h1>Create Pizza</h1>
                    <label htmlFor="name-input">Name : </label>
                    <input onChange={change} value={formData.name}
                        id="name-input" name="name"
                        type="text" placeholder="name"
                    />
                    {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}

                    <label htmlFor="size-dropdown">Select Pizza Size</label>
                    <select value={formData.size} onChange={change} id="size-dropdown" name="size">
                        <option value="">--Select One--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    {formErrors.size && <p style={{ color: 'red' }}>{formErrors.size}</p>}

                    <label htmlFor="topping1">Pepperoni</label>
                    <input type="checkbox" id="topping1"
                        checked={topping1}
                        name="topping1" onChange={change} value="pepperoni"
                    />

                    <label htmlFor="sausage">Sausage</label>
                    <input type="checkbox" id="sausage" name="topping2"
                        checked={topping2}
                        value="sausage" onChange={change} />

                    <label htmlFor="bacon">Bacon</label>
                    <input type="checkbox" id="bacon" name="topping3"
                        onChange={change} checked={topping3}
                        value="bacon" />

                    <label htmlFor="mushshrooms">Mushshrooms</label>
                    <input type="checkbox" name="topping4" id="mushshrooms"
                        onChange={change} checked={topping4}
                        value="mushshrooms" />

                    <label htmlFor="special-text">Special instructions</label>
                    <input id="special-text" type="text" placeholder="special instructions"
                        name="special" value={special} onChange={change} />

                    <input disabled={disabled} type="submit" id="order-button" value="Add to Order" />
                </form>
            </div>
        </StyledDiv>
    )
}