import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Partners from './pages/partners';
import Organisation from './pages/organisation';
import Cac from './pages/cac';
import Overview from './pages/overview';
import ImpactIcf from './pages/impacticf';


function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/partners' element={<Partners />} />
				<Route path='/organisation' element={<Organisation />} />
				<Route path='/impact-catalyst-foundation-icf' element={<ImpactIcf />} />
				<Route path='/overview' element={<Overview />} />
				<Route path='/cac' element={<Cac />} />
			</Routes>
		</Router>
	);
}

export default App;