/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import History from "../Page/Home/History/History";

const router = createBrowserRouter([
	{
		path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/history',
                element: <History />
            }
        ]
	},
]);

export default router;
