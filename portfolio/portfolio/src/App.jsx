
import './App.css'
import NavBar from './assets/components/NavBar/NavBar'

import About from './assets/components/About/About'
import Home from './assets/components/Home/Home'

function App() {


  return (
		<>
			<NavBar />

			<div>
				<Home />
				<About />
			</div>
		</>
  );
}

export default App
