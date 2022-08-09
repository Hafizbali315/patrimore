import { useState } from 'react'

import { SiWhatsapp } from 'react-icons/si'
import { BsChatRightDots, BsTelephone } from 'react-icons/bs'
import FormInput from './../components/Contact/FormInput'

const ContactPage = () => {
	const [formValue, setFormValue] = useState({
		name: 'Escribe tu nombre y apellido',
		email: 'Ej: micorreo@mail.com',
		phone: 'Ej: +568038 84 94',
		description: 'Describe tu situación actual',
	})

	const handleChange = (e) => {
		setFormValue({
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div className="contact_page">
			<div className="container_padding_x">
				<div className="contact_text">
					<h6>¿Necesitas ayuda?</h6>
					<h1>Contacta a un asesor financiero</h1>

					<div className="whatsapp">
						<SiWhatsapp className="icon" />
						<p>Escríbenos al whatsapp</p>
					</div>

					<div className="chat">
						<div className="write">
							<BsChatRightDots className="icon" />
							<p>Escríbenos al chat</p>
						</div>

						<div className="call">
							<BsTelephone className="icon" />
							<p>+(56) 9 3389 3554 </p>
						</div>
					</div>
				</div>

				<form className="contact_form" name="contact v1" method="post" data-netlify="true" onSubmit="submit">
					<input type="hidden" name="form-name" value="contact v1" />
					<FormInput type="text" value={formValue.name} handleChange={handleChange} label="Nombre y apellido" />

					<div className="two_inputs">
						<FormInput type="email" value={formValue.email} handleChange={handleChange} label="Correo" />
						<FormInput type="tel" value={formValue.phone} handleChange={handleChange} label="Télefono" />
					</div>

					<div className="text_area_input">
						<div class="form-floating">
							<textarea
								class="form-control"
								placeholder={formValue.description}
								value={formValue.description}
								onChange={handleChange}
							></textarea>
							<label for="floatingTextarea2">Describe tu situación actual</label>
						</div>
					</div>

					<button>Enviar</button>
				</form>
			</div>
		</div>
	)
}

export default ContactPage
