import styles from "./Services.module.css";

import services from "../../data/services";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.container}>

                <h1>Our Services</h1>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;