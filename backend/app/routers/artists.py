from fastapi import APIRouter, HTTPException
from app.schemas.artist import Artist

router = APIRouter()

artists = [
    Artist(
        id=1,
        name="Ivan Polit",
        slug="ivan-polit",
        style="Blackwork",
        image="https://picsum.photos/500/700?1",
    ),
    Artist(
        id=2,
        name="Emma Stone",
        slug="emma-stone",
        style="Fine Line",
        image="https://picsum.photos/500/700?2",
    ),
    Artist(
        id=3,
        name="Daniel Fox",
        slug="daniel-fox",
        style="Realism",
        image="https://picsum.photos/500/700?3",
    ),
]


@router.get("/", response_model=list[Artist])
def get_artists():
    return artists


@router.get("/{slug}", response_model=Artist)
def get_artist(slug: str):
    for artist in artists:
        if artist.slug == slug:
            return artist

    raise HTTPException(
        status_code=404,
        detail="Artist not found",
    )