import { type ReactNode } from "react";
import styles from './styles/Style.module.css'
import type { StatusName } from "@/domain/constants/status";


interface StatusCompoentProps {
    count: number,
    name: StatusName,
    icon: ReactNode;
    color: string;
}

const StatusCompoenent = ({ count, name, icon, color }: StatusCompoentProps) => {
    return (
        <div className={styles.status_container}>
            <span className={styles.status_icon} style={{ color }}>{icon}</span>
            <p className={styles.count}>{count}</p>
            <p className={styles.name} style={{ color }}>{name}</p>
        </div>

    );
};



export default StatusCompoenent;