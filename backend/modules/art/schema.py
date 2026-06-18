from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class ArtsBase(BaseModel):
    tittle:str
    description: Optional[str]
    image_url:Optional[str]

class ArtsCreate(ArtsBase):
    user_id: int

class ArtsResponse(ArtsBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True

