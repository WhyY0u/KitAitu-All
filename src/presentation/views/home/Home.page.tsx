import type { StatusCounts } from '@/domain/constants/status';
import CreateContainerTicket from './components/createContainerTicket/CreateContainerTicket';
import StatusContainer from './components/statusContainer/StatusContainer';
import styles from './styles/Style.module.css';
import BoxCreateTicket from './components/boxCreateTicket/BoxCreateTicket';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TicketListContainer from './components/ticketListContainer/TicketListContainer';
import { generateRandomTickets } from '@/generator/TicketGenerator';
import { UserApiRepository } from '@/data/repositories/user/UserRepositoriesApi';
import type { User } from '@/domain/entities/user/User';

interface HomePageUserProps {
    user: User;
}
const HomePageOwner = ({ user }: HomePageUserProps) => {
    return <>

    </>
}

const HomePageAdministatorAndUser = ({ user }: HomePageUserProps) => {
    const counts = { new: 5, inProgress: 12, closed: 7, all: 24 };
    const [showModal, setShowModal] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [showTicketList, setShowTicketList] = useState(false);
    const randomTickets = generateRandomTickets(5);


    const fakeStatusCounts: StatusCounts = {
        Новые: 5,
        "В процессе": 12,
        Все: 7,
        Закрытые: 3,
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);

    return (
        <div className={styles.home_page_container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setShowCreate(true)}
            >
                <StatusContainer counts={counts} />
            </motion.div>

            {showCreate && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => setShowTicketList(true)}
                >
                    <CreateContainerTicket
                        user={user!}
                        onClick={() => setShowModal(!showModal)}
                        counts={fakeStatusCounts}

                    />
                </motion.div>
            )}

            {showTicketList && (<TicketListContainer tickets={randomTickets} />)}

            {showModal && (
                <BoxCreateTicket onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};


const HomePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const userRepo = new UserApiRepository();

    useEffect(() => {
        userRepo.getMe().then(response => setUser(response));
    }, [])
    return user?.role == 'Владелец' ? <HomePageOwner user={user!} /> : <HomePageAdministatorAndUser user={user!} />;
}

export default HomePage;
