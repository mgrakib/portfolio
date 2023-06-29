
import { Outlet } from 'react-router-dom';
import './App.css'
import SidBar from './components/SidBar/SidBar'

function App() {
  

  return (
		<div>
			<div className='flex'>
        <SidBar />
        <div>
          <Outlet />
        </div>
			</div>
		</div>
  );
}

export default App
