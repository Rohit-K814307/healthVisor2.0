import "./hero.css";
import React from 'react';
import Typewriter from "typewriter-effect";

export default function Type(){
    return (
        <div className="hero-typer">
            <Typewriter
                options={{
                strings: ['Prevent', 'Protect','and Connect'],
                autoStart: true,
                loop: true,
                }}
            />
        </div>
    );
}