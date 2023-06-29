import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthPorvider from './AuthPorvider/AuthPorvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthPorvider>
			<div className='p-[15px]'>
				<App />
			</div>
		</AuthPorvider>
	</React.StrictMode>
);
