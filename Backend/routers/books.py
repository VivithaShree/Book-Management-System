from fastapi import APIRouter, Depends
from schemas import BookCreate, BookOut
from database import db
from bson import ObjectId

router = APIRouter()

@router.post("/", response_model=BookOut)
def add_book(book: BookCreate, user_id: str):
    new_book = {"title": book.title, "author": book.author, "user_id": user_id}
    result = db.books.insert_one(new_book)
    new_book["id"] = str(result.inserted_id)
    return new_book

@router.get("/", response_model=list[BookOut])
def get_books(user_id: str):
    books = db.books.find({"user_id": user_id})
    return [{"id": str(book["_id"]), "title": book["title"], "author": book["author"], "user_id": book["user_id"]} for book in books]
