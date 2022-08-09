import React from 'react'
import TableRowHeadingLg2 from './Helpers/TableRowHeadingLg2'
import TableRowContentLg from './Helpers/TableRowContentLg'
import { FiCheck } from 'react-icons/fi'

const ComparePlansTableLg2 = () => {
	return (
		<div className="compare_plans_table_lg_1">
			<TableRowHeadingLg2
				label="Planificación Financiera"
				col1Text="Plan Gratis"
				col2Text="Plan Crecimiento"
				col3Text="Plan Consolidación"
				col4Text="Plan Inversionista"
			/>

			<TableRowContentLg
				label="Herramientas de planificación financiera"
				col1Text={<FiCheck className="icon" />}
				col2Text={<FiCheck className="icon" />}
				col3Text={<FiCheck className="icon" />}
				col4Text={<FiCheck className="icon" />}
			/>
			<TableRowContentLg
				label="Análisis de situación financiera 360°"
				col1Text={<span className="icon_x"> x </span>}
				col2Text={<FiCheck className="icon" />}
				col3Text={<FiCheck className="icon" />}
				col4Text={<FiCheck className="icon" />}
			/>

			<TableRowContentLg
				label="Asesor financiero personal"
				col1Text={<span className="icon_x"> x </span>}
				col2Text={<FiCheck className="icon" />}
				col3Text={<FiCheck className="icon" />}
				col4Text={<FiCheck className="icon" />}
			/>
			<TableRowContentLg
				label="Acceso a cursos en línea"
				col1Text={<FiCheck className="icon" />}
				col2Text={<FiCheck className="icon" />}
				col3Text={<FiCheck className="icon" />}
				col4Text={<FiCheck className="icon" />}
			/>

			<TableRowContentLg
				label="Acceso a charlas y talleres"
				col1Text={<span className="icon_x"> x </span>}
				col2Text={<FiCheck className="icon" />}
				col3Text={<FiCheck className="icon" />}
				col4Text={<FiCheck className="icon" />}
			/>
			<TableRowContentLg
				label="Acceso a coach de alto rendimiento"
				col1Text={<span className="icon_x"> x </span>}
				col2Text={<span className="icon_x"> x </span>}
				col3Text={<FiCheck className="icon" />}
				col4Text={<FiCheck className="icon" />}
			/>
		</div>
	)
}

export default ComparePlansTableLg2
