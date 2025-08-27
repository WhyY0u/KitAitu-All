import { motion, AnimatePresence } from "framer-motion";
import styles from './style/Style.module.css';
import { TicketType } from "@/domain/entities/ticket/Ticket";
import type { JSX } from "react";
import { FaBuilding, FaBus, FaSmile, FaUserGraduate, FaUserTie, FaUtensils } from "react-icons/fa";

interface BoxCreateTicketProps {
    onClose: () => void;
}


const ticketIcons: Record<keyof typeof TicketType, JSX.Element> = {
    Bullying: <FaSmile />,
    Study: <FaUserGraduate />,
    Building: <FaBuilding />,
    Food: <FaUtensils />,
    Transport: <FaBus />,
    Psychology: <FaSmile />,
    TeacherComplaint: <FaUserTie />,
};

const BoxCreateTicket = ({ onClose }: BoxCreateTicketProps) => {
    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.0 }}
            >
                <motion.div
                    className={styles.container_box_create_ticket}
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <h2 className={styles.title}>Создать обращение</h2>
                    <p className={styles.subtitle}>
                        Опишите вашу проблему или предложение. Мы обязательно рассмотрим ваше обращение.
                    </p>

                    <label className={styles.name_label}>
                        <span className={styles.label_text}>Заголовок обращения</span>
                        <input
                            className={styles.input}
                            placeholder="Кратко опишите суть проблемы"
                        />
                    </label>

                    <label className={styles.name_label}>
                        <span className={styles.label_text}>Категория</span>
                        <select className={styles.select}>
                            {Object.entries(TicketType).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {ticketIcons[key as keyof typeof TicketType]} {value}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className={styles.name_label}>
                        <span className={styles.label_text}>Подробное описание</span>
                        <textarea
                            className={styles.textarea}
                            placeholder="Подробно опишите проблему: когда она возникла, какие обстоятельства..."
                        />
                    </label>

                    <label className={styles.checkbox_label}>
                        <input type="checkbox" className={styles.checkbox} />
                        <div>
                            <p className={styles.checkbox_title}>Анонимное обращение</p>
                            <p className={styles.checkbox_subtitle}>
                                Ваше имя не будет отображаться в обращении
                            </p>
                        </div>
                    </label>

                    <div className={styles.buttons}>
                        <button className={styles.btn_primary}>Отправить обращение</button>
                        <button
                            className={styles.btn_secondary}
                            onClick={onClose}
                        >
                            Отмена
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BoxCreateTicket;
