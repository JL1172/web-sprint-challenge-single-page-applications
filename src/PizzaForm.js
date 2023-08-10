import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";



export default function Pizza(props) {
    const {disabled,formData,change,submit,formErrors} = props;
    return (
        <div>
            <form onSubmit = {submit} id = "pizza-form">
                <label htmlFor="name-input">Name : </label>
                <input onChange={change} value = {formData.name}
                 id = "name-input" name = "name" 
                 type = "text" placeholder="name"
                 />
                 {formErrors.name && <p style = {{color : "red"}}>{formErrors.name}</p>}
                 <input disabled = {disabled} type = "submit" id = "order-button"/>
            </form>
        </div>
    )
}