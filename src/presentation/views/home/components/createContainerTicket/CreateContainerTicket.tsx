import { StatusName, type StatusCounts } from '@/domain/constants/status';
import styles from './style/Style.module.css'
import { useState } from 'react';

interface CreateContainerTicketProps {
    counts: StatusCounts;
    onFilterChange?: (status: string) => void;
    onClick?: () => void;
}

const CreateContainerTicket = ({ counts, onFilterChange, onClick }: CreateContainerTicketProps) => {
    const filters = [
        { key: StatusName.AllCount, label: 'Все', count: counts.Все },
        { key: StatusName.NewCount, label: 'Новые', count: counts.Новые },
        { key: StatusName.InProgressCount, label: 'В работе', count: counts['В процессе'] },
        { key: StatusName.ClosedCount, label: 'Закрытые', count: counts.Закрытые },
    ];
    const [selected, setSelected] = useState<StatusName>("Все");

    const handleClick = (status: StatusName) => {
        setSelected(status);
        onFilterChange?.(status);
    };

    return <>
        <div className={`${styles.create_container}`}>
            <div className={`${styles.level_one}`}>
                <p className={`${styles.text_level_one}`}>Мои обращения</p>
                <button onClick={onClick} className={`${styles.button_create_ticket}`}>+ Создать обращение</button>
            </div>
            <div className={`${styles.level_two}`}>
                {filters.map(f => (
                    <button
                        key={f.key}
                        className={`${styles.sorted_my_ticket} ${selected === f.key ? styles.active : ""}`}
                        onClick={() => handleClick(f.key)}
                    >
                        {f.label} ({f.count})
                    </button>
                ))}

            </div>
        </div>
    </>
}

export default CreateContainerTicket;