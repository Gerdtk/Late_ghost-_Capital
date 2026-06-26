from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional
from enum import Enum

class TypeUser(str, Enum):
    admin = "admin"
    buyer = "buyer"
    artist = "artist"


class UserBase(BaseModel):
    username: str
    email: EmailStr
    first_name: str
    last_name: str
    type_user: TypeUser = TypeUser.buyer

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        orm_mode = True
        
class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    type_user: Optional[TypeUser] = None