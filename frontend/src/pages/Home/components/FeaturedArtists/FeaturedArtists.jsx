import styles from "./FeaturedArtists.module.css";
import ArtistCard from "../../../../components/ArtistCard/ArtistCard";
import { useEffect, useState } from "react";
import { getArtists } from "../../../../api/artists";


function FeaturedArtists() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function loadArtists() {
            const data = await getArtists();
            setArtists(data);
        }

        loadArtists();
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <span className={styles.label}>
                    Our Artists
                </span>

                <h2 className={styles.title}>
                    Meet Our Artists
                </h2>

                <div className={styles.grid}>
                    {artists.map((artist) => (
                        <ArtistCard
                            key={artist.id}
                            {...artist}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedArtists;