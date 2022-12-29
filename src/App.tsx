import React from "react";
import "./App.scss";
import Front from "./components/Front";
import Back from "./components/Back";

const App = () => {
    return (
        <div className="App">
            <main>
                <Back />
                <Front />
            </main>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Yuji+Boku&display=swap');
            </style>
        </div>
    );
};

export default App;
