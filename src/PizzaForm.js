import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";



export default function Pizza(props) {
    const { disabled, formData, change, submit, formErrors } = props;
    const {name,size,topping1,topping2,topping3,topping4,special} = formData;
    return (
        <div>
            <form onSubmit={submit} id="pizza-form">
                <label htmlFor="name-input">Name : </label>
                <input onChange={change} value={formData.name}
                    id="name-input" name="name"
                    type="text" placeholder="name"
                />
                {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}

                <label htmlFor="size-dropdown">Select Pizza Size</label>
                 <select value = {formData.size} onChange={change} id = "size-dropdown" name = "size">
                    <option value = "">--Select One--</option>
                    <option value = "small">Small</option>
                    <option value = "medium">Medium</option>
                    <option value = "large">Large</option>
                 </select>
                 {formErrors.size && <p style = {{color : 'red'}}>{formErrors.size}</p>}

                 <label htmlFor = "topping1">Pepperoni</label>
                 <input type = "checkbox" id = "topping1" 
                 checked = {topping1}
                  name = "topping1" onChange={change} value = "pepperoni"
                  />
                
                <label htmlFor="sausage">Sausage</label>
                <input type = "checkbox" id = "sausage" name = "topping2" 
                checked = {topping2} 
                value = "sausage"onChange={change} />

                <label htmlFor="bacon">Bacon</label>
                <input type = "checkbox" id = "bacon" name = "topping3" 
                onChange={change} checked = {topping3}
                value = "bacon"/>

                <label htmlFor="mushshrooms">Mushshrooms</label>
                <input type = "checkbox" name = "topping4" id = "mushshrooms" 
                onChange={change} checked = {topping4}
                value = "mushshrooms"/> 

                <label htmlFor = "special-text">Special instructions</label>
                <input id = "special-text" type = "text" placeholder="special instructions"
                name = "special" value = {special} onChange={change}  />

                <input disabled={disabled} type="submit" id="order-button" value = "Add to Order"/>
            </form>
        </div>
    )
}