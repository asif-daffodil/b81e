import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import TestimonialImage from "../../../assets/images/testimonials-bg.jpg";
import TestimonialImage1 from "../../../assets/images/testimonials-1.jpg";
import TestimonialImage2 from "../../../assets/images/testimonials-2.jpg";
import TestimonialImage3 from "../../../assets/images/testimonials-3.jpg";
import TestimonialImage4 from "../../../assets/images/testimonials-4.jpg";
import TestimonialImage5 from "../../../assets/images/testimonials-5.jpg";
import SingleTest from "./SingleTest";

const Testimonial = () => {
    const imgArr = [TestimonialImage1, TestimonialImage2, TestimonialImage3, TestimonialImage4, TestimonialImage5];
  return (
    <div style={{ backgroundImage: `url(${TestimonialImage})` }}>
      <div className="bg-[rgba(14,29,52,0.7)] py-8">
        <Carousel autoPlay={true} infiniteLoop={true} interval="5000">
            {imgArr.map((item, index) => (
                <SingleTest TestimonialImage={item} key={index} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
