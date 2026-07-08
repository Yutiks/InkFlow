from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import artists
from sqlalchemy import text
from app.database.database import engine
from app.database.base import Base
from app.models.artist import Artist


app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    artists.router,
    prefix="/artists",
    tags=["Artists"],
)


@app.get("/")
def root():
    return {"message": "InkFlow API"}


@app.get("/db-test")
def db_test():
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {"message": "Database connected!"}
