import About from "../Shared/About/About";
import HomeBanner from "../Shared/Banner/HomeBanner";
import HomeService from "./Service/HomeService";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <HomeService></HomeService>
        </div>
    );
};

export default Home;