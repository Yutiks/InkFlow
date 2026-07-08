import styles from "./GalleryCard.module.css";

function GalleryCard({ image, style }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={style} />

            <div className={styles.overlay}>
                <span>{style}</span>
            </div>
        </div>
    );
}

export default GalleryCard;