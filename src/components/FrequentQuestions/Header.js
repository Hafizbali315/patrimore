import FrequentQuestionsHeaderImg from '../../assets/images/FrequentQuestionsHeaderImg.png'
import FrequentQuestionsHeaderImgSm from '../../assets/images/FrequentQuestionsHeaderImgSm.png'

const Header = () => {
	return (
		<div className="header container_padding_x">
			<div className="header_text">
				<h6>¿Tienes alguna duda?</h6>
				<h1>
					Preguntas
					<br />
					frecuentes
				</h1>
				<p>
					Si aún tienes dudas visita nuestro <span>Centro de Ayuda o escríbenos al chat.</span>
				</p>
			</div>
			<div className="header_img">
				<img className="lg" src={FrequentQuestionsHeaderImg} alt="FrequentQuestionsHeaderImg" />
				<img className="sm" src={FrequentQuestionsHeaderImgSm} alt="FrequentQuestionsHeaderImg" />
			</div>
		</div>
	)
}

export default Header
