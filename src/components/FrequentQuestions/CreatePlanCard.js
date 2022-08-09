import ContactCardTopRight from '../../assets/images/ContactCardTopRight.png'
import ContactCardBottomLeft from '../../assets/images/ContactCardBottomLeft.png'

import { FiSend } from 'react-icons/fi'

const CreatePlanCard = () => {
	return (
		<div className="create_plan_card container_padding_x">
			<div className="card">
				<div className="content">
					<div className="text">
						<h1>Crea un plan financiero.</h1>
						<h1>En solo pocos clicks.</h1>

						<h6>Crea tu cuenta. Elige tu plan, Ponte una meta y</h6>
						<p> comienza a incrementar tu patrimonio.</p>
					</div>

					<button>Crear mi plan</button>
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

export default CreatePlanCard
