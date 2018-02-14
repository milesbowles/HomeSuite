import calculatorStyle from "./calculatorStyle.css";
import React, { Component } from 'react';


const Wrapper = props => (
<div id="wrapper" className="" {...props}>
    <div id="app">props.children</div>
</div>
);

export default Wrapper;