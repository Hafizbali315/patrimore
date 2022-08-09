import { useState } from 'react'

import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'

const FrequentQuestion = () => {
	const QuestionsAnswerArray = [
		{
			id: 0,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 1,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 2,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 3,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 4,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 5,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 6,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 7,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 8,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
		{
			id: 9,
			question: '¿Cómo funciona Patrimore?',
			answer:
				'En SoyFocus puedes invertir de manera simple, justa y sin tener que llenar miles de papeles. El proceso es muy sencillo Debes responder una serie de preguntas que nos ayudarán a entender quién eres, cuáles son tus objetivos o metas.Luego construimos tu recomendación en base a esa información. Nuestra tecnología te sugiere una estrategia y combinación de fondos mutuos asociadas a tus preferencias y objetivos.Nuestro simulador te ayudará a planificar mejor tus ahorros y definir mejor cómo iniciar tu plan Ejecutas tú la inversión (tú nos debes transferir). Administramos tu plata, es decir, inviertes a través de fondos mutuos administrados por SoyFocus. La sacas cuando quieras, sin multas ni costos adicionales. (https://soyfocus.com/como-funciona)',
		},
	]

	const [clicked, setClicked] = useState(false)

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null)
		}
		setClicked(index)
	}

	return (
		<div className="frequent_questions">
			<div className="container_padding_x">
				<div className="heading">
					<h3>Despeja tus dudas</h3>
					<h1>Preguntas frecuentes</h1>
				</div>

				<div className="questions_container">
					{QuestionsAnswerArray.map((item, index) => (
						<div className="faqs_container">
							<div className="item_container" onClick={() => toggle(index)} key={index}>
								<div className="question">
									<h4>{item.question}</h4>
									<div className="icon_container">
										{clicked === index ? <RiArrowDropUpLine className="icon" /> : <RiArrowDropDownLine className="icon" />}
									</div>
								</div>
								{clicked === index ? (
									<div className="answer_dropdown">
										<p>{item.answer}</p>
									</div>
								) : null}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FrequentQuestion
