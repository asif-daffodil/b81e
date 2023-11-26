import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

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
        }
      ]
    },
]);

export default router;