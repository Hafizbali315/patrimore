const FormInput = ({ name, id, type, value, label }) => {
	return (
		<div class="form-floating">
			<input id={id} type={type} name={name} class="form-control" placeholder={value} value={value} />
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

export default FormInput
