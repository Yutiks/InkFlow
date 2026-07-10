import styles from "./Artist.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtist } from "@/api/artists";

function Artist() {
    const { slug } = useParams();

    const [artist, setArtist] = useState(null);

    useEffect(() => {
        async function loadArtist() {
            const data = await getArtist(slug);
            setArtist(data);
        }

        loadArtist();
    }, [slug]);

    if (!artist) {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            <h1>{artist.name}</h1>
            <img src={artist.image} alt={artist.name} />
            <p>{artist.style}</p>
        </section>
    );
}

export default Artist;
