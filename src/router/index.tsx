import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
    element: <App />,
    },
    {
        path: "/about",
    element: <div><h2>About Page</h2>About</div>,
    },
]);

export default router;