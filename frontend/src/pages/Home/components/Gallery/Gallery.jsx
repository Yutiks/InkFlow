import styles from "./Gallery.module.css";
import GalleryCard from "../../../../components/GalleryCard/GalleryCard";
import gallery from "../../../../data/gallery";

function Gallery() {
    return (
        <section className={styles.gallery}>
            <div className={styles.container}>

                <span className={styles.label}>
                    Portfolio
                </span>

                <h2 className={styles.title}>
                    Latest Works
                </h2>

                <div className={styles.grid}>
                    {gallery.map((tattoo) => (
                        <GalleryCard
                            key={tattoo.id}
                            {...tattoo}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Gallery;