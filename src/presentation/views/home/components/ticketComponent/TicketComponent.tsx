import { FaClock, FaComment, FaChevronDown, FaRobot } from 'react-icons/fa';
import styles from './styles/Style.module.css'
import { TicketStatusAiReverse, type Ticket } from '@/domain/entities/ticket/Ticket';
import { TicketTypeIcons } from '@/domain/constants/type';
import formatTicketTime from '@/utils/DataUtils';

interface TicketComponentProps {
  ticket: Ticket;
}

const TicketComponent = ({ ticket }: TicketComponentProps) => {
  const IconData = TicketTypeIcons[ticket.type];
  const Icon = IconData.icon;
  const color = IconData.color;
  const eng = TicketStatusAiReverse[ticket.ai_status];

  return (
    <div className={styles.ticket_container}>
      {/* Заголовок */}
      <div className={styles.ticket_header}>
        <div className={styles.ticket_title_block}>
          {Icon && <Icon className={styles.status_icon} style={{ color }} />}
          <h3 className={styles.ticket_title}>{ticket.name}</h3>
        </div>

        {/* AI статус */}
        <div className={styles.ai_status}>
          <FaRobot className={styles.ai_icon} />
          <span className={`${styles.ai_badge} ${styles[`status_${eng}`]}`}>
            {ticket.ai_status}
          </span>
        </div>
      </div>

      {/* Основной статус */}
      <div className={styles.status_wrapper}>
        <span className={styles.status_text}>{ticket.status}</span>
      </div>

      {/* Описание */}
      <p className={styles.ticket_description}>
        {ticket.description}
      </p>

      {/* Ответ от AI */}
      {ticket.ai_comment && (
        <div className={styles.ai_answer}>
          <FaRobot className={styles.ai_icon} />
          <p>{ticket.ai_comment}</p>
        </div>
      )}

      {/* Нижняя панель */}
      <div className={styles.ticket_info}>
        <span className={styles.info_item}>
          <FaClock className={styles.info_icon} /> {formatTicketTime(ticket.dataTime)}
        </span>
        <span className={styles.info_item}>
          <FaComment className={styles.info_icon} /> 1 ответ
        </span>
        <button className={styles.expand_button}>
          <FaChevronDown /> Развернуть
        </button>
      </div>
    </div>
  )
}

export default TicketComponent;
