from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.artist import Artist, ArtistCreate
from app.services.artist_service import ArtistService

router = APIRouter()


@router.post("/", response_model=Artist)
def create_artist(
    artist: ArtistCreate,
    db: Session = Depends(get_db),
):
    return ArtistService.create(db, artist)


@router.get("/", response_model=list[Artist])
def get_artists(db: Session = Depends(get_db)):
    return ArtistService.get_all(db)


@router.get("/{slug}", response_model=Artist)
def get_artist(slug: str, db: Session = Depends(get_db)):
    artist = ArtistService.get_by_slug(db, slug)

    if artist is None:
        raise HTTPException(
            status_code=404,
            detail="Artist not found",
        )

    return artist
