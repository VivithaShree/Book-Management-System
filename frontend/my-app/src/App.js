// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddBook from "./AddBook";
import ViewBooks from "./ViewBooks";
import Home from "./Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/view-books" element={<ViewBooks />} />
            </Routes>
        </Router>
    );
}

export default App;
