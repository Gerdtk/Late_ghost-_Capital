#Create service

from sqlalchemy.orm import Session
from modules.users.schema import UserCreate, UserUpdate, UserLogin
from modules.users.model import User
import bcrypt


def hsd_password(password: str) -> str:
    """Hash password using bcrypt"""
    s = bcrypt.gensalt()
    hsd = bcrypt.hashpw(password.encode("utf-8"),s)
    return hsd.decode("utf-8")

def create_user(db, user: UserCreate):
    exist_user = db.query(User).filter( (User.email == user.email)| (User.username == user.username)
                                       ).first()
    if exist_user:
        raise ValueError("User with this email already exist")
    
    db_user = User(
        username = user.username,
        email = user.email,
        first_name = user.first_name,
        last_name = user.last_name,
        password = hsd_password(user.password),
        type_user = user.type_user
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise ValueError("User not found")
    db.delete(db_user)
    db.commit()

def get_user_by_id(db: Session, user_id: int) -> User:
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise ValueError("User not found")
    return db_user

def update_user(db: Session, user_id: int, user_update: UserUpdate) -> User:
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise ValueError("User not found")
    for var, value in vars(user_update).items():
        setattr(db_user, var, value) if value else None
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def login_user(db:Session , user: UserLogin) -> User:
    # Buscar por email 
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user is None:
        raise Exception("User not found")
    
    if not bcrypt.checkpw(
        user.password.encode("utf-8"), 
        db_user.password.encode("utf-8")
        ):
        raise Exception("Invalid password")
    return db_user
    
