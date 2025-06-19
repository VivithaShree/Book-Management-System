import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/books", {
                    params: { user_id: "12345" }, // Replace with actual user_id if needed
                });
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Your Books</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewBooks;
