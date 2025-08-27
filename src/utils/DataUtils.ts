import { format, isToday, isYesterday } from 'date-fns';

const formatTicketTime = (dateString: string) => {
    const date = new Date(dateString);

    if (isToday(date)) {
        return `Сегодня в ${format(date, 'HH:mm')}`;
    } else if (isYesterday(date)) {
        return `Вчера в ${format(date, 'HH:mm')}`;
    } else {
        return format(date, 'dd.MM.yyyy в HH:mm');
    }
};

export default formatTicketTime;