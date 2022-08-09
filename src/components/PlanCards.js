import SinglePlansCard from './SinglePlansCard'

const PlanCards = () => {
	return (
		<div className="plan_cards ">
			<div className="container_padding_x">
				<div className="cards_row">
					<div className="cards_col">
						<SinglePlansCard
							label="Plan Gratis"
							price="0"
							text="Ideal para comenzar a ordenar tu situación financiera."
							heading=""
							point1="Consolida toda tu información financiera en un solo lugar."
							point2="Acceso a Fondos de Inversión  Patrimore."
							point3="$25.000 para usar en nuestra plataforma de cursos."
							point4=""
						/>
					</div>
					<div className="cards_col">
						<SinglePlansCard
							label="Plan Crecimiento"
							price="24.990"
							text="Ideal para empezar a construir tu patrimonio."
							heading="Todo lo del plan gratis +"
							point1="Acceso a un asesor financiero personal."
							point2="Acceso a estrategias de inversión pasivas."
							point3="Análisis integral de tu situación financiera: Vista 360."
							point4="$50.000 para usar en nuestra plataforma de cursos."
						/>
					</div>
					<div className="cards_col">
						<SinglePlansCard
							label="Plan Consolidación"
							price="39.990"
							text="Todo lo que necesitas para hacer despegar tus finanzas."
							heading="Todo del plan crecimiento +"
							point1="Creación de un plan de inversión personalizado."
							point2="Acceso a oportunidades de inversión para inversionistas calificados."
							point3="Acceso a oportunidades de inversión inmobiliaria."
							point4="$100.000 para usar en nuestra plataforma de cursos."
						/>
					</div>
					<div className="cards_col">
						<SinglePlansCard
							label="Plan Inversionista"
							price="59.990"
							text="Pensado para sacar el máximo rendimiento de tus inversiones."
							heading="Todo lo del plan Consolidación +"
							point1="Comité de inversión dedicado."
							point2="Acceso a plataformas de inversión internacionales."
							point3="Acompañamiento tributaria nacional e internacional."
							point4="$250.000 para usar en nuestra plataforma de cursos."
						/>
					</div>
				</div>
			</div>

			<div className="bg"></div>
		</div>
	)
}

export default PlanCards
