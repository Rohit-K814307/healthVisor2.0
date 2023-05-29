import "./hero.css";
import React from 'react';
import  Type  from "./Type.jsx";

export default function Hero(){
    return (
        <div className="Hero">
            <Type />
            <p className="heading-under-type">with HealthVisor.</p>
            <p className="subheading">Your personal AI-powered healthcare assistant powered by</p>
            <p className="subheadingtwo">custom AI and GPT-4.</p>
        </div>
    );
}