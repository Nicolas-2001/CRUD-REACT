import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://192.168.20.26:5000/api/productos";

function MostrarProductos() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		getProductos();
	}, []);

	const getProductos = async () => {
		const datos = await axios.get(URL);
		setProductos(datos.data.productos);
	};

	const eliminarProductos = async (id) => {
		await axios.delete(`${URL}/${id}`);
		getProductos();
	};

	return (
		<div className="container">
			<h1>Productos</h1>
			<div className="row">
				<div className="col">
					<Link to="/productos/agregar" className="btn btn-success mt-2 mb-2">
						<i className="bi bi-person-add"></i>
						<span style={{ marginLeft: "5px" }}>
							Agregar Producto
						</span>
					</Link>
					<table className="table">
						<thead className="tableTheadBg">
							<tr>
								<td> Nombre </td>
								<td> Precio </td>
								<td> Descripcion </td>
								<td> Stock </td>
								<td> Acciones </td>
							</tr>
						</thead>
						<tbody>
							{productos.map((producto, index) => (
								<tr key={index}>
									<td> {producto.nombre}</td>
									<td>$ {producto.precio}</td>
									<td> {producto.descripcion}</td>
									<td> {producto.stock}</td>
									<td>
										<Link
											to={`/productos/editar/${producto._id}`}
											className="btn btn-warning"
										>
											<i class="bi bi-pencil"></i>
										</Link>
										&nbsp;
										<button
											onClick={() =>
												eliminarProductos(producto._id)
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

export default MostrarProductos;
