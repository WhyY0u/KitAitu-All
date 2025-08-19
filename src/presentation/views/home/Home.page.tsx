import type { StatusCounts } from '@/domain/constants/status';
import CreateContainerTicket from './components/createContainerTicket/CreateContainerTicket';
import StatusContainer from './components/statusContainer/StatusContainer';
import styles from './styles/Style.module.css';
import BoxCreateTicket from './components/boxCreateTicket/BoxCreateTicket';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
    const counts = { new: 5, inProgress: 12, closed: 7, all: 24 };
    const [showModal, setShowModal] = useState(false);
    const [showCreate, setShowCreate] = useState(false); // ⬅️ контролим появление
    const fakeStatusCounts: StatusCounts = {
        Новые: 5,
        "В процессе": 12,
        Все: 7,
        Закрытые: 3,
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);

    return (
        <div className={styles.home_page_container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setShowCreate(true)} 
            >
                <StatusContainer counts={counts} />
            </motion.div>

            {showCreate && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <CreateContainerTicket
                        onClick={() => setShowModal(!showModal)}
                        counts={fakeStatusCounts}
                    />
                </motion.div>
            )}

            

            {showModal && (
                <BoxCreateTicket onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default HomePage;
