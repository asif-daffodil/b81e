import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Logis from "../Pages/Logis";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: "About",
        },
        {
          path: "/logis",
          element: <Logis />,
        }
      ]
    },
]);

export default router;