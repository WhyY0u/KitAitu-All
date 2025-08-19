export const StatusName = {
    AllCount: "Все",
    NewCount: "Новые",
    InProgressCount: "В процессе",
    ClosedCount: "Закрытые"
} as const;

export type StatusName = typeof StatusName[keyof typeof StatusName];

export type StatusCounts = {
  [key in StatusName]: number;
};

export type Counts = {
    new: number;
    inProgress: number;
    closed: number;
    all: number;
};