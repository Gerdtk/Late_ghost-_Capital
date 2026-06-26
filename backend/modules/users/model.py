from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, Enum as SaEnum
from sqlalchemy.sql import func
from core.database import Base
# ================ #
from enum import Enum as pyEnum
from sqlalchemy.orm import relationship


class TypeUser(pyEnum):
    admin = "admin"
    buyer = "buyer"
    artist = "artist"


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index= True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    password = Column(String(255), nullable=False)
    type_user = Column(SaEnum(TypeUser), nullable=False, default=TypeUser.buyer)

    #timestamps
    created_at = Column(DateTime(timezone = True), server_default=func.now())
    updated_at = Column(DateTime(timezone = True), onupdate = func.now())

    #relationships
    arts = relationship("Arts", back_populates="owner")