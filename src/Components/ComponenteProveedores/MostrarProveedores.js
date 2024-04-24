import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://192.168.20.26:5000/api/proveedor";

function MostrarProveedores() {
	const [proveedores, setProveedores] = useState([]);

	useEffect(() => {
		getProveedores();
	}, []);

	const getProveedores = async () => {
		try {
			const response = await axios.get(URL);
			setProveedores(response.data.proveedores);
		} catch (error) {
			console.error("Error al obtener proveedores:", error);
		}
	};

	const eliminarProveedor = async (id) => {
		await axios.delete(`${URL}/${id}`);
		getProveedores();
	};

	return (
		<div className="container">
			<h1>Proveedores</h1>
			<div className="row">
				<div className="col">
					<Link
						to="/proveedores/agregar"
						className="btn btn-success mt-2 mb-2"
					>
						<i className="bi bi-person-add"></i>
						<span style={{ marginLeft: "5px" }}>
							Agregar Proveedor
						</span>
					</Link>
					<table className="table">
						<thead className="tableTheadBg">
							<tr>
								<th>Nombre</th>
								<th>NIT</th>
								<th>Contacto</th>
								<th>Dirección</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{proveedores && proveedores.length > 0 ? (
								proveedores.map((proveedor) => (
									<tr key={proveedor._id}>
										<td>{proveedor.nombre}</td>
										<td>{proveedor.nit || proveedor.NIT}</td>
										<td>
											{proveedor.contacto.nombre}
											<br />
											{proveedor.contacto.email}
											<br />
											{proveedor.contacto.telefono}
										</td>
										<td>
											{proveedor.direccion.calle}
											<br />
											{proveedor.direccion.ciudad},{" "}
											{proveedor.direccion.estado}
											<br />
											{proveedor.direccion.codigoPostal}
										</td>
										<td>
											<Link
												to={`/proveedores/editar/${proveedor._id}`}
												className="btn btn-warning"
											>
												<i className="bi bi-pencil"></i>
											</Link>
											<button
												onClick={() =>
													eliminarProveedor(
														proveedor._id
													)
												}
												className="btn btn-danger"
											>
												<i className="bi bi-trash"></i>
											</button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan="5">
										No hay proveedores disponibles
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default MostrarProveedores;
