import { FaSchool, FaUserCircle } from "react-icons/fa";
import styles from './style/Style.module.css';
import { SchoolRepositoryApi } from "@/data/repositories/school/SchoolRepositoryApi";
import { useEffect, useState } from "react";
import { type School } from "@/domain/entities/school/School";
import type { User } from "@/domain/entities/user/User";
import { UserApiRepository } from "@/data/repositories/user/UserRepositoriesApi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const schoolRepo = new SchoolRepositoryApi();
    const userRepo = new UserApiRepository();
    const [school, setSchool] = useState<School | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoadingUser, setLoadingUser] = useState<boolean>(true);
    const [isLoadingSchool, setLoadingSchool] = useState<boolean>(true);

    useEffect(() => {
        userRepo
            .getMe()
            .then(resp => setUser(resp))
            .finally(() => setLoadingUser(false));
        schoolRepo
            .getUserSchool()
            .then(resp => setSchool(resp))
            .finally(() => setLoadingSchool(false));
    }, []);

    const isLoading = isLoadingUser || isLoadingSchool;

    useEffect(() => {
        console.log(school?.name);

    }, [isLoadingSchool])
    return (
        <AnimatePresence>
            {!isLoading && (
                <motion.header
                    className={styles.header}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className={styles.left}>
                        <FaSchool className={styles.icon} />
                        <div className={styles.textGroup}>
                            <p className={styles.title}>{school?.type} {school?.name}</p>
                            <p className={styles.subtitle}>Система обращений</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <FaUserCircle className={styles.icon} />
                        <div className={styles.textGroup}>
                            <p className={styles.name}>{user?.fullname}</p>
                        </div>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
};

export default Header;
