import React from "react";

export default function MainContent() {
    return (
        <main>
            <div className="width-container bg-img">
                <h1 className="h1-style">Fun facts about React</h1>
                <ul className="list-style">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </main>
    )
}