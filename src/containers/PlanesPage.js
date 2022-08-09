import ComparePlans from '../components/ComparePlans'
import FrequentQuestion from '../components/FrequentQuestion'
import PlanCards from '../components/PlanCards'
import Header from './../components/PlanesPage/Header'
import ContactAdviserCard from './../components/PlanesPage/ContactAdviserCard'

const PlanesPage = () => {
	return (
		<div className="planes_page">
			<Header />

			<PlanCards />
			<ComparePlans />
			<ContactAdviserCard />
			<FrequentQuestion />
		</div>
	)
}

export default PlanesPage
