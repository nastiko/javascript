import React from 'react';
import ReactDOM from 'react-dom/client'; // Upgrade React 18
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="components">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
