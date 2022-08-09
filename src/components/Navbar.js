import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	return (
		<div className="container_padding_x">
			<div className="navbar ">
				<div className="left">
					<div className="logo">
						<Link to="/" className="link">
							<img src={Logo} alt="logo" />
						</Link>
					</div>

					<ul className="links">
						<li>
							<Link className="link" to="/how-it-works">
								¿Cómo funciona?
							</Link>
						</li>
						<li>
							<Link className="link" to="/planes">
								Nuestros Planes
							</Link>
						</li>
						<li>
							<Link className="link" to="/us">
								Nosotros
							</Link>
						</li>
						<li>
							<Link className="link" to="/frequent-questions">
								Preguntas frecuentes
							</Link>
						</li>
					</ul>
				</div>

				<div className="right">
					<div className="buttons">
						<button>
							<Link className="link" to="/login">
								Entrar
							</Link>
						</button>

						<button>
							<Link className="link" to="/start">
								Empezar
							</Link>
						</button>
					</div>

					<div className="hamburger_menu">
						{showMobileMenu ? (
							<span className="icon" onClick={() => setShowMobileMenu(false)}>
								{' '}
								X{' '}
							</span>
						) : (
							<GiHamburgerMenu className="icon" onClick={() => setShowMobileMenu(true)} />
						)}
					</div>
				</div>

				{showMobileMenu && (
					<div className="mobile_menu">
						<ul className="links">
							<li>
								<Link className="link" onClick={() => setShowMobileMenu(false)} to="/how-it-works">
									¿Cómo funciona?
								</Link>
							</li>
							<li>
								<Link className="link" onClick={() => setShowMobileMenu(false)} to="/planes">
									Nuestros Planes
								</Link>
							</li>
							<li>
								<Link className="link" onClick={() => setShowMobileMenu(false)} to="/us">
									Nosotros
								</Link>
							</li>
							<li>
								<Link className="link" onClick={() => setShowMobileMenu(false)} to="/frequent-questions">
									Preguntas frecuentes
								</Link>
							</li>
							<li className="buttons">
								<button>
									<Link className="link" onClick={() => setShowMobileMenu(false)} to="/login">
										Entrar
									</Link>
								</button>

								<button>
									<Link className="link" onClick={() => setShowMobileMenu(false)} to="/start">
										Empezar
									</Link>
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
