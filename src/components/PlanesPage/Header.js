import HeaderPlus from '../../assets/images/HeaderPlus.png'

const Header = () => {
	return (
		<div className="header container_padding_x">
			<div className="header_content">
				<div className="text">
					<h3>Descubre Nuestros Planes</h3>

					<h1>
						Empieza hoy a construir
						<br />
						un mejor futuro financiero
					</h1>
				</div>

				<div className="header_plus_img">
					<img src={HeaderPlus} alt="HeaderPlus" />
				</div>
			</div>
		</div>
	)
}

export default Header
