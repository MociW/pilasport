import About from "./About/About";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Location from "./Location/Location";
import Navbar from "./Navbar/Navbar";
import OverviewProduct from "./OverviewProduct/OverviewProduct";
import OverviewProject from "./OverviewProject/OverviewProject";

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <OverviewProject />
            <OverviewProduct />
            <Location />
            <Footer />
        </>
    );
};

export default Home;
