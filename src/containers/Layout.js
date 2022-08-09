import { Outlet } from 'react-router-dom'

import Footer from './../components/Footer'
import Navbar from './../components/Navbar'

import HeaderTopBg from '../assets/images/HeaderTopBg.png'

const Layout = () => {
	return (
		<div className="layout">
			<div className="top_bg">
				<img src={HeaderTopBg} alt="" />
			</div>

			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
