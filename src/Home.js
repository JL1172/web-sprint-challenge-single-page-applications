import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const navigate = useNavigate();
    const nav = evt => {
        navigate("/pizza")
    }
    return (
        <div>
            <h1>BloomEats</h1>
            <button onClick={nav}>Order Now</button>
        </div>
    )
}