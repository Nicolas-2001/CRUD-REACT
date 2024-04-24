import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://192.168.20.26:5000/api/clientes";

function MostrarClientes() {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		getClientes();
	}, []);

	const getClientes = async () => {
		const datos = await axios.get(URL);
		setClientes(datos.data);
	};

	const eliminarClientes = async (id) => {
		await axios.delete(`${URL}/${id}`);
		getClientes();
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Link
						to="/clientes/agregar"
						className="btn btn-success mt-2 mb-2"
					>
						<i className="bi bi-person-add"></i>
						<span style={{ marginLeft: "5px" }}>
							Agregar Usuario
						</span>
					</Link>
					<table className="table">
						<thead className="tableTheadBg">
							<tr>
								<td> Nombres </td>
								<td> Apellidos </td>
								<td> Documento </td>
								<td> Correo </td>
								<td> Telefono </td>
								<td> Direccion </td>
								<td> Acciones </td>
							</tr>
						</thead>
						<tbody>
							{clientes.map((cliente, index) => (
								<tr key={index}>
									<td> {cliente.nombres}</td>
									<td> {cliente.apellidos}</td>
									<td> {cliente.documento}</td>
									<td> {cliente.correo}</td>
									<td> {cliente.telefono}</td>
									<td> {cliente.direccion}</td>
									<td>
										<Link
											to={`/clientes/editar/${cliente._id}`}
											className="btn btn-warning"
										>
											<i class="bi bi-pencil"></i>
										</Link>
										&nbsp;
										<button
											onClick={() =>
												eliminarClientes(cliente._id)
											}
											className="btn btn-danger"
										>
											<i class="bi bi-trash"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default MostrarClientes;
