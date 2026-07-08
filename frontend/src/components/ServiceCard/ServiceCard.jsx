import styles from "./ServiceCard.module.css";
import Button from "../../components/Button/Button";

function ServiceCard({ title, description, price, currency }) {
    return (
        <article className={styles.card}>
            <h3>{title}</h3>

            <p>{description}</p>

            <p>
                From {currency}{price}
            </p>

            <Button variant="primary">
                Book Now
            </Button>
        </article>
    );
}

export default ServiceCard;