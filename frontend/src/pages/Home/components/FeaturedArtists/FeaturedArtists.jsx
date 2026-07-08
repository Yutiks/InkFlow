import styles from "./FeaturedArtists.module.css";
import ArtistCard from "../../../../components/ArtistCard/ArtistCard";
import artists from "../../../../data/artists";




function FeaturedArtists() {
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