import { FaClock, FaComment, FaChevronDown, FaRobot, FaCheck } from 'react-icons/fa';
import styles from './styles/Style.module.css'
import { TicketStatusAiReverse, type Ticket } from '@/domain/entities/ticket/Ticket';
import { TicketTypeIcons } from '@/domain/constants/type';
import formatTicketTime from '@/utils/DataUtils';
import { useState } from 'react';

interface TicketComponentProps {
  ticket: Ticket;
}

const TicketComponent = ({ ticket }: TicketComponentProps) => {
    const [commentAdmin, setCommentAdmin] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const IconData = TicketTypeIcons[ticket.type];
  const Icon = IconData.icon;
  const color = IconData.color;
  const eng = TicketStatusAiReverse[ticket.ai_status];
  console.log(ticket.dataTime);

  function handleStatusChange(status: string): void {
    throw new Error('Function not implemented.');
  }

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
        <div className={styles.ticket_info_left}>
          <span className={styles.info_item}>
            <FaClock className={styles.info_icon} /> {formatTicketTime(ticket.dataTime)}
          </span>
          <span className={styles.info_item}>
            <FaComment className={styles.info_icon} /> 1 ответ
          </span>
        </div>

        <button
          className={`${styles.expand_button} ${isExpanded ? styles.rotated : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FaChevronDown className={styles.chevron_icon} />
          {isExpanded ? 'Свернуть' : 'Развернуть'}
        </button>
      </div>

      {/* Блок с дополнительной информацией */}
      {isExpanded && (
        <div className={styles.expand_block}>
          <textarea
          placeholder="Введите ваш комментарий..."
          className={styles.comment_textarea}
          value={commentAdmin}
          onChange={(e) => {
          if (e.target.value.length <= 500) {
            setCommentAdmin(e.target.value);
          }
          }} rows={4}
          />
          <div className={styles.char_count}>
            {commentAdmin.length}/500
          </div>

      {/* Кнопки статусов */}
      <div className={styles.status_buttons}>
        {[
          { label: 'В прогрессе', icon: <FaClock /> },
          { label: 'Закрыт', icon: <FaCheck /> },
        ].map((item) => (
          <button
            key={item.label}
            className={styles.status_btn}
            onClick={() => handleStatusChange(item.label)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

          <button className={styles.button_pull}>Отправить</button>
        </div>
      )}
    </div>
  )
}

export default TicketComponent;
