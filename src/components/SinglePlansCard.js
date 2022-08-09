import React from 'react'
import { FiCheck } from 'react-icons/fi'

const SinglePlansCard = ({ label, price, text, heading, point1, point2, point3, point4 }) => {
	return (
		<div className="single_card">
			<div className="content">
				<div className="top">
					<div className="heading">
						<h2>{label}</h2>

						<h1>
							${price}
							<span>mes.</span>
						</h1>

						<p>{text}</p>
					</div>

					<div className="checks">
						<h6>{heading}</h6>
						<div className="check_row">
							<div className="left">
								<FiCheck className="icon" />
							</div>

							<p>{point1}</p>
						</div>
						<div className="check_row">
							<div className="left">
								<FiCheck className="icon" />
							</div>

							<p>{point2}</p>
						</div>
						<div className="check_row">
							<div className="left">
								<FiCheck className="icon" />
							</div>

							<p>{point3}</p>
						</div>

						{point4 && (
							<div className="check_row">
								<div className="left">
									<FiCheck className="icon" />
								</div>

								<p>{point4}</p>
							</div>
						)}
					</div>
				</div>

				<div className="bottom">
					<button>Empezar</button>
				</div>
			</div>
		</div>
	)
}

export default SinglePlansCard
