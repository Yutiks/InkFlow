import client from "./client";

export async function getArtists() {
    const response = await client.get("/artists");
    return response.data;
}

export async function getArtist(slug) {

    const response = await client.get(`/artists/${slug}`);

    return response.data;

}