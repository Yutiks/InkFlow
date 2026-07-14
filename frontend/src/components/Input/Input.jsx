import styles from "./Input.module.css";

function Input({
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className={`${styles.field} ${className}`}>
            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}

            <input
                className={styles.input}
                {...props}
            />

            {error && (
                <span className={styles.error}>
                    {error}
                </span>
            )}
        </div>
    );
}

export default Input;
