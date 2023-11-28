import { Link } from "react-router-dom";
import phbg from "../assets/images/page-header.jpg";
import LogisTab from "../Components/LogisTab/LogisTab";

const LogisCss = {
  backgroundImage: `url(${phbg})`,
};

const Logis = () => {
  return (
    <div>
      <div
        style={LogisCss}
        className="relative z-[1] before:absolute before:w-full before:h-full before:bg-[rgba(14,29,52,0.8)] before:z-[-1]"
      >
        <div className="text-center p-24 pt-40 text-white max-w-4xl m-auto">
          <h2 className="text-6xl mb-4">Service Details</h2>
          <p className="">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
        </div>
      </div>
      <div className="text-lg breadcrumbs bg-slate-100 py-4 mb-24">
        <ul className="container m-auto">
          <li>
            <Link to="/" className="text-blue-800 font-bold" style={{textDecoration: "none"}}>Home</Link>
          </li>
          <li>
            Service Details
          </li>
        </ul>
      </div>
      <LogisTab />
    </div>
  );
};

export default Logis;
