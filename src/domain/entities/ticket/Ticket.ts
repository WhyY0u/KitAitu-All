export const TicketType = {
  Bullying: "Буллинг/Травля",
  Study: "Учебные вопросы",
  Building: "Состояние здания",
  Food: "Питание",
  Transport: "Транспорт",
  Psychology: "Психологическая поддержка",
  TeacherComplaint: "Жалоба на преподавателя",
} as const;


export type TicketType = typeof TicketType[keyof typeof TicketType];
export type TicketTypeKey = keyof typeof TicketType;
export type TicketTypeValue = typeof TicketType[TicketTypeKey];

export const TicketStatus = {
  New: "Новый",
  InProgress: "В процессе",
  Closed: "Закрытый",
} as const;


export const TicketStatusAi = {
  USEFUL: "Полезный",
  NOT_USEFUL: "Не полезный",
  SPAM: "Спам"
} as const;

export type TicketStatusAi = typeof TicketStatusAi[keyof typeof TicketStatusAi];


export type TicketStatus = typeof TicketStatus[keyof typeof TicketStatus];

export const TicketStatusAiReverse = Object.fromEntries(
  Object.entries(TicketStatusAi).map(([key, value]) => [value, key])
) as Record<typeof TicketStatusAi[keyof typeof TicketStatusAi], keyof typeof TicketStatusAi>;


export type Ticket = {
  readonly id: string;
  readonly name: string;
  readonly dataTime: string;
  readonly type: TicketType;
  readonly status: TicketStatus;
  readonly ai_status: TicketStatusAi;
  readonly ai_comment: string;
  readonly anon: boolean;
  readonly description: string;

  readonly userCreatorID: string;
  readonly adminComment?: string;
};
