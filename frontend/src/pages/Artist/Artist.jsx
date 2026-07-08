import styles from "./Artist.module.css";
import { useParams } from "react-router-dom";
import artists from "../../data/artists";

function Artist() {
    const { slug } = useParams();

    const artist = artists.find(
        (artist) => artist.slug === slug
    );

    if (!artist) {
        return <h1>Artist not found</h1>;
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