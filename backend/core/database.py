import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from dotenv import load_dotenv


#load varianbles from .env
load_dotenv()
#URL
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
#Validate 
if not SQLALCHEMY_DATABASE_URL:
    raise ValueError("No se encuentra base de datos en .env")

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    echo=True,
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bined=engine)
Base = declarative_base()


def test_connection():
    try:
        with engine.connect() as conn:
            print("Conexion a PostreSQL exitosa")
    except Exception as e:
        print(f"Error conectado a PostgreSQL: {e}")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()