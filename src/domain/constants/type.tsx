import {
  FaUserGraduate, FaBuilding, FaUtensils, FaBus,
  FaSmile, FaUserTie, FaQuestion
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { TicketType } from '../entities/ticket/Ticket';

type TicketIconData = {
  icon: IconType;
  color: string;
};

export const TicketTypeIcons: Record<TicketType, TicketIconData> = {
  "Буллинг/Травля": { icon: FaSmile, color: "#E74C3C" }, // красный
  "Учебные вопросы": { icon: FaUserGraduate, color: "#3498DB" }, // синий
  "Состояние здания": { icon: FaBuilding, color: "#F39C12" }, // оранжевый
  "Питание": { icon: FaUtensils, color: "#27AE60" }, // зелёный
  "Транспорт": { icon: FaBus, color: "#8E44AD" }, // фиолетовый
  "Психологическая поддержка": { icon: FaSmile, color: "#F1C40F" }, // жёлтый
  "Жалоба на преподавателя": { icon: FaUserTie, color: "#2C3E50" }, // тёмно-синий
  "Другое": { icon: FaQuestion, color: "#7F8C8D" }, // серый
};
