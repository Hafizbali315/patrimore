import { Link } from 'react-router-dom'

import { FaTwitter, FaFacebookF } from 'react-icons/fa'
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'

import StartupChile from '../assets/images/StartupChile.png'
import Nxtp from '../assets/images/Nxtp.png'
import Corfo from '../assets/images/Corfo.png'
import Logo from '../assets/images/Logo.png'
import FooterBottomBg from '../assets/images/FooterBottomBg.png'

const Footer = () => {
	return (
		<div className="footer">
			<div className="content">
				<div className="container_padding_x">
					<div className="row_top">
						{/* First Column */}
						<div className="footer_col">
							<ul>
								<li>
									<h6>Sobre Nosotros</h6>
								</li>

								<li>
									<Link to="/¿Por qué somos diferentes?" target="_blank" className="link" rel="noopener noreferrer">
										¿Por qué somos diferentes?
									</Link>
								</li>
								<li>
									<Link to="/Preguntas frecuentes" target="_blank" className="link" rel="noopener noreferrer">
										Preguntas frecuentes
									</Link>
								</li>
								<li>
									<Link
										to="/Fondo Patrimore Guardian
"
										target="_blank"
										className="link"
										rel="noopener noreferrer"
									>
										Fondo Patrimore Guardian
									</Link>
								</li>
							</ul>
						</div>

						{/* 2nd Column */}
						<div className="footer_col">
							<ul>
								<li>
									<h6>Comunidad</h6>
								</li>

								<li>
									<Link to="/Blog" target="_blank" className="link" rel="noopener noreferrer">
										Blog
									</Link>
								</li>
								<li>
									<Link to="/Visión semanal" target="_blank" className="link" rel="noopener noreferrer">
										Visión semanal
									</Link>
								</li>
								<li>
									<Link
										to="/Clientes felices
"
										target="_blank"
										className="link"
										rel="noopener noreferrer"
									>
										Clientes felices
									</Link>
								</li>
							</ul>
						</div>

						{/* 3rd Column */}
						<div className="footer_col">
							<ul>
								<li>
									<h6>Contacto</h6>
								</li>

								<li>
									<Link to="/Hablemos?" target="_blank" className="link" rel="noopener noreferrer">
										Hablemos?
									</Link>
								</li>
								<li>
									<Link to="/Centro de ayuda" target="_blank" className="link" rel="noopener noreferrer">
										Centro de ayuda
									</Link>
								</li>
								<li>
									<Link to="/Términos y condiciones" target="_blank" className="link" rel="noopener noreferrer">
										Términos y condiciones
									</Link>
								</li>
							</ul>
						</div>

						{/* 4th Column */}
						<div className="footer_col">
							<ul>
								<li>
									<h6>Con el apoyo de:</h6>
								</li>

								<li>
									<Link to="/StartupChile" target="_blank" className="link" rel="noopener noreferrer">
										<img src={StartupChile} alt="StartupChile" />
									</Link>
								</li>
								<li>
									<Link to="/nxtp" target="_blank" className="link" rel="noopener noreferrer">
										<img src={Nxtp} alt="StartupChile" />
									</Link>
								</li>
								<li>
									<Link to="/corfo" target="_blank" className="link" rel="noopener noreferrer">
										<img src={Corfo} alt="StartupChile" />
									</Link>
								</li>
							</ul>
						</div>

						{/* 5th Column */}
						<div className="footer_col">
							<ul>
								<li>
									<h6>Encuéntranos en:</h6>
								</li>

								<li>
									<ul className="social_links">
										<li>
											<Link to="/youtube" target="_blank" className="link" rel="noopener noreferrer">
												<AiOutlineYoutube className="icon" />
											</Link>
										</li>

										<li>
											<Link to="/facebook" target="_blank" className="link" rel="noopener noreferrer">
												<FaFacebookF className="icon" />
											</Link>
										</li>

										<li>
											<Link to="/instagram" target="_blank" className="link" rel="noopener noreferrer">
												<AiOutlineInstagram className="icon" />
											</Link>
										</li>

										<li>
											<Link to="/twitter" target="_blank" className="link" rel="noopener noreferrer">
												<FaTwitter className="icon" />
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>

					<div className="row_bottom">
						<div className="logo">
							<img src={Logo} alt="logo" />
						</div>

						<p>todos los derechos reservados @patrimore.cl</p>
					</div>
				</div>
			</div>

			<div className="footer_bottom_bg">
				<img src={FooterBottomBg} alt="FooterBottomBg" />
			</div>
		</div>
	)
}

export default Footer
