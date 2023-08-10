import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";



export default function Pizza(props) {
    const {disabled,formData,change,submit} = props;
    return (
        <div>
            <form onSubmit = {submit} id = "pizza-form">
                <label htmlFor="name-input">Name : </label>
                <input onChange={change} value = {formData.name}
                 id = "name-input" name-input = "name-input" 
                 type = "text" placeholder="name"
                 />
                 <input type = "submit" id = "order-button"/>
            </form>
        </div>
    )
}