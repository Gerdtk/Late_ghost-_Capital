from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, Enum
from sqlalchemy.sql import func
from ...core.database import Base
##
from sqlalchemy.orm import relationship

class Arts(Base):
    __tablename__ = "arts"

    id = Column(Integer, primary_key=True, index=True, nullable=False)
    title = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    image_url = Column(String(255), nullable=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)

    #timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    #relations
    owner = relationship("User", back_populates="arts")
    