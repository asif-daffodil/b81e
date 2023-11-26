import "./hero.css";
import himg from "../../../assets/hero-img.svg";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <div className="hero herobaz overflow-hidden">
      <div className="min-h-screen hero-content grid md:grid-cols-2">
        <img
          src={himg}
          className="md:order-last max-w-[100%] box-border p-12"
        />
        <div className="text-white">
          <h1 className="text-5xl font-bold">Your Lightning Fast Delivery Partner</h1>
          <p className="py-6">
          Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit
          </p>
          <div className="bg-white p-3 rounded-xl">
            <form action="" className="flex">
                <input type="text" placeholder="ZIP code or City" className="w-[100%] outline-none text-black pl-3" />
                <button className="btn btn-primary btn-lg">Search</button>
            </form>
          </div>
          <div className="grid grid-cols-4 gap-3 place-items-center mt-10">
            <div className="grid place-items-center w-max">
              <CountUp start={0} end={232} duration={2} className="text-4xl font-bold" />
              {/* taiwind devider */}
              <div className="h-1 w-6 bg-blue-600 my-3"></div>
              <p>Clients</p>
            </div>
            <div className="grid place-items-center w-max">
              <CountUp start={0} end={521} duration={2} className="text-4xl font-bold" />
              {/* taiwind devider */}
              <div className="h-1 w-6 bg-blue-600 my-3"></div>
              <p>Projects</p>
            </div>
            <div className="grid place-items-center w-max">
              <CountUp start={0} end={1453} duration={2} className="text-4xl font-bold" />
              {/* taiwind devider */}
              <div className="h-1 w-6 bg-blue-600 my-3"></div>
              <p>Support</p>
            </div>
            <div className="grid place-items-center w-max">
              <CountUp start={0} end={32} duration={2} className="text-4xl font-bold" />
              {/* taiwind devider */}
              <div className="h-1 w-6 bg-blue-600 my-3"></div>
              <p>Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
