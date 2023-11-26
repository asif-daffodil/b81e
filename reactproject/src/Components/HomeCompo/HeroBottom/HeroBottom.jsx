import { faArrowRight, faCartFlatbed, faTruck, faTruckRampBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const HeroBottom = () => {
    const navigate = useNavigate();
    const goLogis = () => {
        navigate("/logis");
    };
  return (
    <div className="grid grid-cols-3 gap-3 container mx-auto my-24">
      <div className="flex gap-4 group cursor-pointer" onClick={goLogis}>
        <div className="flex-shrink text-5xl text-blue-900 group-hover:text-blue-600">
            <FontAwesomeIcon icon={faCartFlatbed} />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl group-hover:text-blue-600">Lorem Ipsum</h2>
          <p className="my-3">
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident
          </p>
          <a href="" className="font-bold group-hover:text-blue-600">
            Learn More &nbsp;
            <span className="font-thin">
            <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
      </div>
      <div className="flex gap-4 group cursor-pointer" onClick={goLogis}>
        <div className="flex-shrink text-5xl text-blue-900 group-hover:text-blue-600">
            <FontAwesomeIcon icon={faTruck} />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl group-hover:text-blue-600">Lorem Ipsum</h2>
          <p className="my-3">
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident
          </p>
          <a href="" className="font-bold group-hover:text-blue-600">
            Learn More &nbsp;
            <span className="font-thin">
            <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
      </div>
      <div className="flex gap-4 group cursor-pointer" onClick={goLogis}>
        <div className="flex-shrink text-5xl text-blue-900 group-hover:text-blue-600">
            <FontAwesomeIcon icon={faTruckRampBox} />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl group-hover:text-blue-600">Lorem Ipsum</h2>
          <p className="my-3">
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident
          </p>
          <a href="" className="font-bold group-hover:text-blue-600">
            Learn More &nbsp;
            <span className="font-thin">
            <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
