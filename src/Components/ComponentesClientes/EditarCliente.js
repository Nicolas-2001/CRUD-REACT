import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://192.168.20.26:5000/api/clientes";

function EditarCliente() {
	const { id } = useParams();
	const [nombres, setNombres] = useState("");
	const [apellidos, setApellidos] = useState("");
	const [documento, setDocumento] = useState("");
	const [correo, setCorreo] = useState("");
	const [telefono, setTelefono] = useState("");
	const [direccion, setDireccion] = useState("");
	const navigate = useNavigate();

	const getClientById = async () => {
		const datos = await axios.get(`${URL}/${id}`);
		setNombres(datos.data.nombres);
		setApellidos(datos.data.apellidos);
		setDocumento(datos.data.documento);
		setTelefono(datos.data.telefono);
		setCorreo(datos.data.correo);
		setDireccion(datos.data.direccion);
	};

	useEffect(() => {
		getClientById();
		// eslint-disable-next-line
	}, []);

	const actualizarCliente = async (g) => {
		g.preventDefault();
		await axios.put(`${URL}/${id}`, {
			nombres: nombres,
			apellidos: apellidos,
			documento: documento,
			correo: correo,
			telefono: telefono,
			direccion: direccion,
		});
		navigate("/");
	};

	return (
		<div className="container">
			<h3> Editar Cliente </h3>
			<form onSubmit={actualizarCliente}>
				<div className="mb-3">
					<label className="from-label"> Nombres </label>
					<input
						value={nombres}
						onChange={(g) => setNombres(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Apellidos </label>
					<input
						value={apellidos}
						onChange={(g) => setApellidos(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Documento </label>
					<input
						value={documento}
						onChange={(g) => setDocumento(g.target.value)}
						type="number"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Correo </label>
					<input
						value={correo}
						onChange={(g) => setCorreo(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Telefono </label>
					<input
						value={telefono}
						onChange={(g) => setTelefono(g.target.value)}
						type="number"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Direccion </label>
					<input
						value={direccion}
						onChange={(g) => setDireccion(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-success">
					{" "}
					<i className="bi bi-pencil"></i>
					{" Editar"}
				</button>{" "}
				<button
					onClick={() => {
						navigate("/");
					}}
					className="btn btn-primary"
				>
					{" "}
					<i className="bi bi-arrow-left-circle"></i>
					{" volver"}
				</button>
			</form>
		</div>
	);
}

export default EditarCliente;
