from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from core.database import get_db
from modules.users.schema import UserCreate, UserUpdate, UserLogin, UserResponse
from modules.users.services import create_user, delete_user, get_user_by_id, update_user, login_user

#============= API Router =============#
router = APIRouter(prefix="/user", tags=["User"])

@router.post("/registrer", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def registrer(user_data: UserCreate, db:Session = Depends(get_db)):
    """ Register new user """
    try: 
        return create_user(db, user_data)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)
    