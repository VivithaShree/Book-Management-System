class User:
    def __init__(self, username: str, hashed_password: str):
        self.username = username
        self.hashed_password = hashed_password


class Book:
    def __init__(self, title: str, author: str, user_id: str):
        self.title = title
        self.author = author
        self.user_id = user_id
