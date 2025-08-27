import type { Ticket } from '@/domain/entities/ticket/Ticket';
import TicketComponent from '../ticketComponent/TicketComponent';
import styles from './style/Style.module.css';
import { motion } from 'framer-motion';

interface TicketListContainerProps {
    tickets: Ticket[];
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, 
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const TicketListContainer = ({ tickets }: TicketListContainerProps) => {
    return (
        <motion.div
            className={styles.ticket_list_container}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {tickets.map((ticket) => (
                <motion.div key={ticket.id} variants={itemVariants}>
                    <TicketComponent ticket={ticket} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default TicketListContainer;
