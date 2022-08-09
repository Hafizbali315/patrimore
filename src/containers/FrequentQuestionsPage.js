import FrequentQuestion from '../components/FrequentQuestion'
import CreatePlanCard from '../components/FrequentQuestions/CreatePlanCard'
import Header from '../components/FrequentQuestions/Header'

const FrequentQuestionsPage = () => {
	return (
		<div className="frequent_questions_page">
			<Header />
			<FrequentQuestion />
			<CreatePlanCard />
		</div>
	)
}

export default FrequentQuestionsPage
