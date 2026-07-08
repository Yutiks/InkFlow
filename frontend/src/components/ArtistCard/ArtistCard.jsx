import styles from "./ArtistCard.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function ArtistCard({ name, style, image, slug }) {
    return (
        <article className={styles.card}>
            <img
                src={image}
                alt={name}
                className={styles.image}
            />

            <div className={styles.content}>
                <h3>{name}</h3>

                <p>{style}</p>

                <Link to={`/artists/${slug}`}>
                    <Button variant="secondary">
                        View Profile
                    </Button>
                </Link>
            </div>
        </article>
    );
}

export default ArtistCard;