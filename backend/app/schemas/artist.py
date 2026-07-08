from pydantic import BaseModel


class Artist(BaseModel):
    id: int
    name: str
    slug: str
    style: str
    image: str
