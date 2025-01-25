import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Location from "./Location/Location";

import OverviewProduct from "./ProductOverview/ProductOverview";
import OverviewProject from "./ProjectOverview/ProjectOverview";

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
