import type { Ticket } from '@/domain/entities/ticket/Ticket';
import styles from './styles/Style.module.css'

interface TicketComponentProps {
    ticket: Ticket;
}

const TicketComponent = ({ ticket }: TicketComponentProps) => {
    return <>
        <div className={`${styles.ticket_container}`}>
            
        </div>
    </>
}

export default TicketComponent;