import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthPorvider from './AuthPorvider/AuthPorvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<AuthPorvider>
				<RouterProvider router={router} />
			</AuthPorvider>
		</HelmetProvider>
	</React.StrictMode>
);
