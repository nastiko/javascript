import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="navbar width-container">
                <div className="logo">
                    <img className="img-style" src="/images/logo192.png" alt="React logo"/>
                    <h1 className="logo-title">ReactFacts</h1>
                </div>
                <p className="project-title">React Course - Project 1</p>
            </nav>
        </header>
    )
}