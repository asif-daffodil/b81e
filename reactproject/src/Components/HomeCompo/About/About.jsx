import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import abourBg from "../../../assets/images/about.jpg";

import {
  faBroadcastTower,
  faCompress,
  faNetworkWired,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const About = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-7 mb-24">
      <div>
        <h2 className="text-blue-900 font-bold text-[32px]">About Us</h2>
        <p className="my-4">
          Dolor iure expedita id fuga asperiores qui sunt consequatur minima.
          Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam
          itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis
          veritatis asperiores placeat.
        </p>
        <div className="">
          <div className="flex">
            <div className="text-4xl text-blue-600 w-16">
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">
                Ullamco laboris nisi ut aliquip consequat
              </h4>
              <p>
                Magni facilis facilis repellendus cum excepturi quaerat
                praesentium libre trade
              </p>
            </div>
          </div>

          <div className="flex my-5">
            <div className="text-5xl text-blue-600 w-16">
              <FontAwesomeIcon icon={faCompress} />
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">
                Magnam soluta odio exercitationem reprehenderi
              </h4>
              <p>
                Quo totam dolorum at pariatur aut distinctio dolorum laudantium
                illo direna pasata redi
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="text-4xl text-blue-600 w-16">
              <FontAwesomeIcon icon={faBroadcastTower} />
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">
                Voluptatem et qui exercitationem
              </h4>
              <p>
                Et velit et eos maiores est tempora et quos dolorem autem
                tempora incidunt maxime veniam
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center" style={{backgroundImage: `url(${abourBg})`}}>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 1, autoplay: 1 }}
          isOpen={isOpen}
          videoId="UxDBT3PJ2hk"
          onClose={() => setOpen(false)}
        />
        <button className="btn-primary bg-[rgba(255,255,255,0.6)] rounded-full" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlayCircle} className="text-8xl text-blue-600 hover:text-blue-900 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default About;
