from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient

# MongoDB setup
client = MongoClient("mongodb://127.0.0.1:27017")
db = client["BookManagement"]
books_collection = db["books"]

# FastAPI app setup
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend to connect
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class Book(BaseModel):
    title: str
    author: str
    user_id: str

@app.post("/books")
async def add_book(book: Book):
    new_book = book.dict()
    result = books_collection.insert_one(new_book)
    if result.inserted_id:
        return {"message": "Book added successfully!", "id": str(result.inserted_id)}
    raise HTTPException(status_code=500, detail="Failed to add book.")

@app.get("/books")
async def get_books(user_id: str):
    books = list(books_collection.find({"user_id": user_id}, {"_id": 0}))
    return books
