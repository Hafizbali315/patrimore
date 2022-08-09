const FormInput = ({ type, value, handleChange, label }) => {
	return (
		<form class="form-floating">
			<input type={type} class="form-control" placeholder={value} value={value} onChange={handleChange} />
			<label for="floatingInputInvalid">{label}</label>
		</form>
	)
}

export default FormInput
