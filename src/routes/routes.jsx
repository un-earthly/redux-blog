import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.jsx";
import About from "../pages/About.jsx";
import Home from "../pages/Home";
import Latest from "../pages/Latest.jsx";
import Dashboard from "../pages/Admin/Admin.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "latest",
                element: <Latest />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export default routes;