import "./hero.css";
import himg from "../../../assets/hero-img.svg";

const Hero = () => {
  return (
    <div className="hero min-h-screen herobaz">
      <div className="hero-content grid md:grid-cols-2">
        <img
          src={himg}
          className="md:order-last max-w-[100%] p-12"
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
