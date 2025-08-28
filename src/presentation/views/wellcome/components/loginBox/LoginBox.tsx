import { useEffect, useState } from 'react';
import styles from './style/Style.module.css';
import { useNavigate } from 'react-router';
import { UserApiRepository } from '@/data/repositories/user/UserRepositoriesApi';

interface LoginBoxProps {
    schoolId: string;
}

const LoginBox = ({ schoolId }: LoginBoxProps) => {
    const [fio, setFio] = useState('');
    const navigate = useNavigate();
    const userRepo = new UserApiRepository();
    useEffect(() => {
        const checkUser = async () => {
            try {
                const user = await userRepo.getMe();
                if (user) {
                    navigate("/home");
                }
            } catch (error) {
                console.error("Ошибка при получении юзера:", error);
            }
        };
        checkUser();

    }, []);

    const handleSave = () => {
        if (!fio.trim()) {
            alert("Введите ФИО");
            return;
        }
        console.log(userRepo.register(fio, schoolId));
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
