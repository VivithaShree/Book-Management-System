from pydantic import BaseModel


class UserCreate(BaseModel):
    username: str
    password: str


class BookCreate(BaseModel):
    title: str
    author: str


class BookOut(BookCreate):
    id: str
    user_id: str

    class Config:
        orm_mode = True
