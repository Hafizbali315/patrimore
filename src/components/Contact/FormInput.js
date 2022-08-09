const FormInput = ({ name, type, value, handleChange, label }) => {
	return (
		<div class="form-floating">
			<input type={type} name={name} class="form-control" placeholder={value} value={value} onChange={handleChange} />
			<label for="floatingInputInvalid">{label}</label>
		</div>
	)
}

export default FormInput
