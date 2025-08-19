export const TicketType = {
  Bullying: "Буллинг/Травля",
  Study: "Учебные вопросы",
  Building: "Состояние здания",
  Food: "Питание",
  Transport: "Транспорт",
  Psychology: "Психологическая поддержка",
  TeacherComplaint: "Жалоба на преподавателя",
  Other: "Другое",
} as const;


export type TicketType = typeof TicketType[keyof typeof TicketType];

export const TicketStatus = {
  New: "Новый",
  InProgress: "В процессе",
  Closed: "Закрытый",
} as const;


export type TicketStatus = typeof TicketStatus[keyof typeof TicketStatus];


export type Ticket = {
  readonly id: string;
  readonly name: string;
  readonly type: TicketType;
  readonly status: TicketStatus;
  readonly anon: boolean;
  readonly description: string;
};
