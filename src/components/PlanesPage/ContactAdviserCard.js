import ContactCardTopRight from '../../assets/images/ContactCardTopRight.png'
import ContactCardBottomLeft from '../../assets/images/ContactCardBottomLeft.png'

import { FiSend } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ContactAdviserCard = () => {
	return (
		<div className="still_in_doubt container_padding_x">
			<div className="card">
				<div className="content">
					<div className="text">
						<h1>¿Aún con dudas?</h1>

						<h6>Uno de nuestros asesores te puede orientar.</h6>
						<p>Ayudandoe a encontrar el plan perfecto para ti y así puedas concretar tus metas.</p>
					</div>

					<button>
						<Link to="/contact" className="link">
							Contactar asesor
						</Link>
					</button>
				</div>

				<div className="top_right_img">
					<img src={ContactCardTopRight} alt="ContactCardTopRight" />
				</div>

				<div className="bottom_left_img">
					<img src={ContactCardBottomLeft} alt="ContactCardBottomLeft" />
				</div>

				<div className="send_icon_container">
					<FiSend className="icon" />
				</div>
			</div>
		</div>
	)
}

export default ContactAdviserCard
