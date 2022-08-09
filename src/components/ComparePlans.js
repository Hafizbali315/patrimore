import ComparePlansTableLg1 from './ComparePlansTableLg1'
import ComparePlansTableLg2 from './ComparePlansTableLg2'
import ComparePlansTableLg3 from './ComparePlansTableLg3'

const ComparePlans = () => {
	return (
		<div className="compare_plans container_padding_x">
			<div className="heading">
				<h5>Detalle de planes</h5>
				<h2>Compara nuestros planes lado a lado</h2>
			</div>

			<div className="plans_table">
				<ComparePlansTableLg1 />
			</div>
			<div className="plans_table">
				<ComparePlansTableLg2 />
			</div>
			<div className="plans_table">
				<ComparePlansTableLg3 />
			</div>
		</div>
	)
}

export default ComparePlans
