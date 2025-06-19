// Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <header className="navbar">
                <div className="logo">📚 Book Management System</div>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/add-book">Add Book</Link>
                    <Link to="/view-books">View Books</Link>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <h1>Welcome to the Book Management System</h1>
                    <p>Organize, manage, and track your favorite books efficiently!</p>
                </section>

                <section className="features">
                    <div className="feature-card">
                        <h2>Login</h2>
                        <p>Access your account to manage your books.</p>
                        <Link to="/login" className="btn">Go to Login</Link>
                    </div>
                    <div className="feature-card">
                        <h2>Register</h2>
                        <p>Create an account to start adding and managing books.</p>
                        <Link to="/register" className="btn">Register Now</Link>
                    </div>
                    <div className="feature-card">
                        <h2>Add Books</h2>
                        <p>Add new books to your personalized collection.</p>
                        <Link to="/add-book" className="btn">Add a Book</Link>
                    </div>
                    <div className="feature-card">
                        <h2>View Books</h2>
                        <p>Browse all the books in your collection.</p>
                        <Link to="/view-books" className="btn">View Books</Link>
                    </div>
                </section>
            </main>

            <footer>
                <p>© 2025 Book Management System. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
