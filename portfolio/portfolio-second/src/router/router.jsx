// /** @format */


// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "../App";
// import Home from "../Page/Home/Home";
// import History from "../Page/History/History";
// import Contact from "../Page/Contact/Contact";
// import Portfolio from "../Page/Portfolio/Portfolio";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: '/history',
//                 element: <History />
//             },
//             {
//                 path: '/portfolio',
//                 element: <Portfolio />
//             },
//             {
//                 path: '/contact',
//                 element: <Contact />
//             }
//         ]
// 	},
// ]);

// export default router;



import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import History from "../Page/History/History";
import Contact from "../Page/Contact/Contact";
import Portfolio from "../Page/Portfolio/Portfolio";
import ProjectDetails from "../Page/ProjectDetails/ProjectDetails";

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
				path: "/history",
				element: <History />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/portfolio",
				element: <Portfolio />,
			},
			{
				path: "/project-details/:id",
				element: <ProjectDetails />,
				
			},
		],
	},
]);

export default router;
