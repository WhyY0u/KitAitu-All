import type { IconType } from "react-icons";
import { FaCheck, FaCircle, FaClock } from "react-icons/fa";
import type { TicketStatus } from "../entities/ticket/Ticket";

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


type StatusData = {
  icon: IconType;
  color: string;
  text: string;
};

export const TicketStatusData: Record<TicketStatus, StatusData> = {
  "Новый": { icon: FaClock, color: "#3498DB", text: "Новый" },   
  "В процессе": { icon: FaCircle, color: "#F39C12", text: "В процессе" },
  "Закрытый": { icon: FaCheck, color: "#2ECC71", text: "Закрытый" }, 
};