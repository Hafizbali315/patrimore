const TableRowHeadingLg = ({ label, col1Text, col2Text, col3Text, col4Text }) => {
	return (
		<div className="table_heading">
			<div className="t_p">
				<div className="tr_p">
					<div className="tc_p_1">
						<div className="th_p">{label}</div>
					</div>
					<div className="tc_p_2">
						<div className="tr_v_p">
							<div className="tc_p">
								<div className="td_p">
									<h2>{col1Text}</h2>
								</div>
							</div>
							<div className="tc_p">
								<div className="td_p">
									<h2>{col2Text}</h2>
								</div>
							</div>
							<div className="tc_p">
								<div className="td_p">
									<h2>{col3Text}</h2>
								</div>
							</div>
							<div className="tc_p">
								<div className="td_p">
									{' '}
									<h2>{col4Text}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TableRowHeadingLg
