import About from "../Components/HomeCompo/About/About";
import Hero from "../Components/HomeCompo/Hero/Hero";
import HeroBottom from "../Components/HomeCompo/HeroBottom/HeroBottom";
import Testimonial from "../Components/HomeCompo/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroBottom />
            <About />
            <Testimonial />
        </div>
    );
};

export default Home;