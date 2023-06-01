import React from 'react';
import ReactDOM from 'react-dom/client'; // Upgrade React 18

function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className="img-style" src="/images/logo192.png" alt="React logo"/>
                <ul className="nav-menu">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return(
        <main className="main-style">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer className="footer-style">
            <small>©2021 Anastasia development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
