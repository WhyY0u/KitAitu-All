import styles from "./style/Style.module.css";

const MyForm = () => {
    return (
        <div className={styles.formContainer}>
            <label className={styles.label}>Выберите статус:</label>
            <select className={styles.select}>
                <option>Новый</option>
                <option>В работе</option>
                <option>Закрыт</option>
            </select>
        </div>
    );
};

export default MyForm;
