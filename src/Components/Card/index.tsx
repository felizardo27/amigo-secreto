import { ReactChild } from "react";
import styles from './Card.module.scss';

export default function Card({children}: {children: ReactChild}) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}