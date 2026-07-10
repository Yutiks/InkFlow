from sqlalchemy.orm import Session

from app.models.artist import Artist

from app.schemas.artist import ArtistCreate
from app.models.artist import Artist


class ArtistService:
    @staticmethod
    def create(db: Session, artist: ArtistCreate):
        db_artist = Artist(
            name=artist.name,
            slug=artist.slug,
            style=artist.style,
            image=artist.image,
        )

        db.add(db_artist)
        db.commit()
        db.refresh(db_artist)

        return db_artist

    @staticmethod
    def get_all(db: Session):
        return db.query(Artist).all()

    @staticmethod
    def get_by_slug(db: Session, slug: str):
        return (
            db.query(Artist)
            .filter(Artist.slug == slug)
            .first()
        )
