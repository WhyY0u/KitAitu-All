
import Background from "@/presentation/renderutils/background/Background";
import Header from "../sections/home/header/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <header>
                <Header />
            </header>
            <Background >
                <main>{children}</main>
            </Background>
        </>
    );
};

export default HomeLayout;
