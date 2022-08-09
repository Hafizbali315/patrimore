const TableRowContentLg = ({ label, col1Text, col2Text, col3Text, col4Text }) => {
	return (
		<div className="table_content">
			<div className="t_p">
				<div className="tr_p">
					<div className="tc_p_1">
						<div className="th_p">{label}</div>
					</div>
					<div className="tc_p_2">
						<div className="tr_v_p">
							<div className="tc_p">
								<div className="td_p">{col1Text}</div>
							</div>
							<div className="tc_p">
								<div className="td_p">{col2Text}</div>
							</div>
							<div className="tc_p">
								<div className="td_p">{col3Text}</div>
							</div>
							<div className="tc_p">
								<div className="td_p">{col4Text}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TableRowContentLg
