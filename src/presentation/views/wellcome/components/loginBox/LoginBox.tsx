import { useState } from 'react';
import styles from './style/Style.module.css';
import { useNavigate } from 'react-router';

const LoginBox = () => {
    const [fio, setFio] = useState('');
    const navigate = useNavigate();

    const handleSave = () => {
        if (!fio.trim()) {
            alert("Введите ФИО");
            return;
        }
        navigate('/home');
    }

    return (
        <div className={`${styles.center_screen}`}>
            <div className={styles.login_box_container}>
                <p className={styles.login_text_one}>Введите свои данные</p>
                <p className={styles.login_text_two}>
                    Позже вы сможете при создании тикета отправить его анонимно
                </p>

                <div className={styles.input_group}>
                    <label className={styles.label_login_box}>
                        <p className={styles.fio_name}>ФИО</p>
                        <input
                            className={styles.input_login_box}
                            value={fio}
                            onChange={e => setFio(e.target.value)}
                        />
                    </label>
                    <button className={styles.save_button} onClick={handleSave}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginBox;
