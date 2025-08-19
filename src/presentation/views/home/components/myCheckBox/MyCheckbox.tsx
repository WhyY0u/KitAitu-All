import styles from "./style/Style.module.css";

const MyCheckbox = () => {
  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" className={styles.checkbox} />
      Согласен с условиями
    </label>
  );
};

export default MyCheckbox;
