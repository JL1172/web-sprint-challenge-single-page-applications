import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Pizza(props) {
    return (
        <div>
            <form>
                <label htmlFor="name">Name : </label>
                <input id = "name" name = "name" type = "text" placeholder="name"/>
            </form>
        </div>
    )
}