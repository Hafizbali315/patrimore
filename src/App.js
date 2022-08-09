import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import Home from './containers/Home'
import PlanesPage from './containers/PlanesPage'
import FrequentQuestionsPage from './containers/FrequentQuestionsPage'
import ContactPage from './containers/ContactsPage'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="planes" element={<PlanesPage />} />
						<Route path="frequent-questions" element={<FrequentQuestionsPage />} />
						<Route path="contact" element={<ContactPage />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
