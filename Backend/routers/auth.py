from fastapi import APIRouter, HTTPException
from schemas import UserCreate
from database import db
from passlib.hash import bcrypt

router = APIRouter()

@router.post("/register")
def register(user: UserCreate):
    if db.users.find_one({"username": user.username}):
        raise HTTPException(status_code=400, detail="Username already exists.")
    hashed_password = bcrypt.hash(user.password)
    db.users.insert_one({"username": user.username, "password": hashed_password})
    return {"message": "User registered successfully"}

@router.post("/login")
def login(user: UserCreate):
    db_user = db.users.find_one({"username": user.username})
    if not db_user or not bcrypt.verify(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}
