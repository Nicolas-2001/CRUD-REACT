import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://192.168.20.26:5000/api/productos/";

function AgregarProductos() {
	const [nombre, setNombre] = useState("");
	const [precio, setPrecio] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [stock, setStock] = useState("");
	const navigate = useNavigate();

	const guardarProducto = async (g) => {
		g.preventDefault();
		await axios.post(URL, {
			nombre,
			precio,
			descripcion,
			stock,
		});
		navigate("/productos");
	};

	return (
		<div className="container" style={{ textAlign: "center" }}>
			<h3> Modulo guardar Clientess </h3>
			<form onSubmit={guardarProducto}>
				<div className="mb-3">
					<label className="from-label"> Nombre </label>
					<input
						value={nombre}
						onChange={(g) => setNombre(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Precio </label>
					<input
						value={precio}
						onChange={(g) => setPrecio(parseFloat(g.target.value))}
						type="number"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Descripción </label>
					<textarea
						value={descripcion}
						onChange={(g) => setDescripcion(g.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="from-label"> Stock </label>
					<input
						value={stock}
						onChange={(g) => setStock(parseInt(g.target.value))}
						type="number"
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-success">
					{" "}
					<i className="bi bi-person"></i>
					{" Agregar"}
				</button>{" "}
				<button
					onClick={() => {
						navigate("/productos");
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

export default AgregarProductos;
