import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.jsx";
import About from "../pages/About.jsx";
import Home from "../pages/Home";
import Latest from "../pages/Latest.jsx";
import View from "../pages/Admin/View.jsx";
import Add from "../pages/Admin/Add.jsx";
import Update from "../pages/Admin/Update.jsx";
import Delete from "../pages/Admin/Delete.jsx";
import Admin from "../layout/Admin.jsx";

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
        ],
    },
    {
        path: "admin",
        element: <Admin />,
        children: [
            {
                path: "view",
                element: <View />,
            },
            {
                path: "add",
                element: <Add />,
            },
            {
                path: "delete",
                element: <Delete />,
            },
            {
                path: "update",
                element: <Update />,
            },
        ],
    },
]);

export default routes;