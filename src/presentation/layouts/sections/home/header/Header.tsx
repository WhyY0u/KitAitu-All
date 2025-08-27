import { FaSchool, FaUserCircle } from "react-icons/fa";
import styles from './style/Style.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <FaSchool className={styles.icon} />
                <div className={styles.textGroup}>
                    <p className={styles.title}>Лицей №2</p>
                    <p className={styles.subtitle}>Система обращений</p>
                </div>
            </div>
            <div className={styles.right}>
                <FaUserCircle className={styles.icon} />
                <div className={styles.textGroup}>
                    <p className={styles.name}>Иван Иванов Иванович</p>
                    <p className={styles.role}>id:91238182</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
