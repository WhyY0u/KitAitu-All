import { StatusName, type Counts } from '@/domain/constants/status';
import styles from './styles/Style.module.css'
import { FaCheckCircle, FaList, FaPlusCircle, FaSpinner } from 'react-icons/fa';
import StatusCompoenent from '../status/Status';
import { motion } from 'framer-motion';

interface StatusContainerProps {
    counts: Counts;
    onComplete?: () => void; // <- колбэк наружу
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
};

const StatusContainer = ({ counts, onComplete }: StatusContainerProps) => {
    const statusItems = [
        { name: StatusName.AllCount, count: counts.all, icon: <FaList />, color: '#6c757d' },
        { name: StatusName.NewCount, count: counts.new, icon: <FaPlusCircle />, color: '#0d6efd' },
        { name: StatusName.InProgressCount, count: counts.inProgress, icon: <FaSpinner />, color: '#fd7e14' },
        { name: StatusName.ClosedCount, count: counts.closed, icon: <FaCheckCircle />, color: '#198754' },
    ];

    return (
        <motion.div
            className={styles.container_counts}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={onComplete} // <- вызов после завершения stagger-анимации
        >
            {statusItems.map((item, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <StatusCompoenent
                        count={item.count}
                        name={item.name}
                        icon={item.icon}
                        color={item.color}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default StatusContainer;
