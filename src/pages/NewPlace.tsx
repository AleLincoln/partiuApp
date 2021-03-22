import { ReactNode } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { useFormik } from 'formik'

const Form = styled.form`

	max-width: 500px;
	padding: 10px 20px;
	background: #f4f7f8;
	margin: 10px auto;
	padding: 20px;
	background: #f4f7f8;
	border-radius: 8px;
	font-family: Georgia, "Times New Roman", Times, serif;
    
& fieldset{
	border: none;
}
& legend {
	font-size: 1.4em;
	margin-bottom: 10px;
}
& label {
	display: block;
	margin-bottom: 8px;
}
& input[type="text"],
& input[type="date"],
& input[type="datetime"],
& input[type="email"],
& input[type="number"],
& input[type="search"],
& input[type="time"],
& input[type="url"],
& textarea,
& select {
	font-family: Georgia, "Times New Roman", Times, serif;
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	width: 100%;
	box-sizing: border-box; 
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box; 
	background-color: #e8eeef;
	color:#8a97a0;
	-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	margin-bottom: 30px;
}
& input[type="text"]:focus,
& input[type="date"]:focus,
& input[type="datetime"]:focus,
& input[type="email"]:focus,
& input[type="number"]:focus,
& input[type="search"]:focus,
& input[type="time"]:focus,
& input[type="url"]:focus,
& textarea:focus,
& select:focus{
	background: #d2d9dd;
}
& select{
	-webkit-appearance: menulist-button;
	height:35px;
}
& .number {
	background: #1abc9c;
	color: #fff;
	height: 30px;
	width: 30px;
	display: inline-block;
	font-size: 0.8em;
	margin-right: 4px;
	line-height: 30px;
	text-align: center;
	text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	border-radius: 15px 15px 15px 0px;
}

& input[type="submit"],
& input[type="button"]
{
	position: relative;
	display: block;
	padding: 19px 39px 18px 39px;
	color: #FFF;
	margin: 0 auto;
	background: #1abc9c;
	font-size: 18px;
	text-align: center;
	font-style: normal;
	width: 100%;
	border: 1px solid #16a085;
	border-width: 1px 1px 3px;
	margin-bottom: 10px;
}
& input[type="submit"]:hover,
& input[type="button"]:hover
{
	background: #109177;
}


`

function NewPlace() {


	const formik = useFormik({
		initialValues:{
			name:'',
			description:'',
			address:''
		},
		onSubmit: values => {
			console.log(values)
		}
	})

	return <div>


		<Form onSubmit={formik.handleSubmit}>
			<h3>
				Novo local
            </h3>
			<p>
				Nos ajude a emcontrar novos lugares para brasileiros se sentirem em casa
            </p>
			<label htmlFor='placeName'>

				<input type='text' name='name' placeholder='Local' onChange={formik.handleChange}></input>
			</label>
			<label htmlFor='placeName'>

				<input type='text' name='description' placeholder='Descrição' onChange={formik.handleChange}></input>
			</label>
			<label htmlFor='placeName'>
				<input type='text' name='address' placeholder='Endereço' onChange={formik.handleChange}></input>
			</label>

			<input type='submit' value='Enviar' />


		</Form>

		<Navbar />

	</div>


}

export default NewPlace