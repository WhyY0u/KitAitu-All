import { useLocation } from "react-router";
import { motion } from "framer-motion";
import LoginBox from "./components/loginBox/LoginBox";
import styles from './styles/Style.module.css';

const WellComePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const myParam = queryParams.get('schoolID');
    console.log(myParam);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className={styles.pageContainer}>
            <motion.p
                className={styles.title}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                Добро пожаловать в KitAitu
            </motion.p>
            <motion.p
                className={styles.subtitle}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Мир сложных вопросов и быстрых ответов
            </motion.p>
            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <LoginBox />
            </motion.div>
        </div>
    );
}

export default WellComePage;
