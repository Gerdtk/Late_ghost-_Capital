from fastapi import FastAPI
from core.database import engine, Base, get_db
from modules.users.Users import router


app = FastAPI(
    title="Late ghost: Capital API",
    description="API para la plataforma de arte Late ghost: Capital",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# 🔹 Incluir rutas
app.include_router(router)

# 🔹 (Opcional) Crear tablas al iniciar
@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "Welcome to Late ghost: Capital API"}