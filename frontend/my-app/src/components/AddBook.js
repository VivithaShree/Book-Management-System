import React, { useState } from "react";
import axios from "axios";

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    const handleAddBook = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/books", {
                title,
                author,
                user_id: "12345", // Replace with actual user_id if needed
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error adding book: " + error.response.data.detail);
        }
    };

    return (
        <div>
            <h1>Add a Book</h1>
            <form onSubmit={handleAddBook}>
                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <button type="submit">Add Book</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddBook;
