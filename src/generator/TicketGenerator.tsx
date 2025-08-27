import { TicketStatus, TicketStatusAi, TicketType, type Ticket } from "@/domain/entities/ticket/Ticket";


// Массив всех типов и статусов для случайного выбора
const ticketTypes = Object.values(TicketType);
const ticketStatuses = Object.values(TicketStatus);
const ticketAiStatus = Object.values(TicketStatusAi);

// Функция генерации случайного числа
const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция генерации случайного тикета
export const generateRandomTicket = (): Ticket => {
    const randomType = ticketTypes[getRandomInt(0, ticketTypes.length - 1)];
    const randomStatus = ticketStatuses[getRandomInt(0, ticketStatuses.length - 1)];
    const randomStatusAI = ticketAiStatus[getRandomInt(0, ticketAiStatus.length - 1)];

    const id = crypto.randomUUID();
    const date = new Date();
    const dataTime = date.toLocaleString();

    return {
        id,
        name: `Тикет #${id.slice(0, 5)}`,
        dataTime,
        type: randomType,
        status: randomStatus,
        anon: Math.random() < 0.5,
        ai_status: randomStatusAI,
        ai_comment: "Ответ от ИИ",
        description: "Описание проблемы создается случайным образом для примера.",
        userCreatorID: `user${getRandomInt(1, 10)}`,
        adminComment: Math.random() < 0.5 ? "Комментарий администратора" : undefined,
    };
};

export const generateRandomTickets = (count: number): Ticket[] => {
    return Array.from({ length: count }, () => generateRandomTicket());
};
