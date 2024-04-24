import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://192.168.20.26:5000/api/proveedor";

function AgregarProveedor() {
	const [nombre, setNombre] = useState("");
	const [nit, setNit] = useState("");
	const [contactoNombre, setContactoNombre] = useState("");
	const [contactoEmail, setContactoEmail] = useState("");
	const [contactoTelefono, setContactoTelefono] = useState("");
	const [calle, setCalle] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [estado, setEstado] = useState("");
	const [codigoPostal, setCodigoPostal] = useState("");

	const navigate = useNavigate();

	const guardarProveedor = async (g) => {
		g.preventDefault();
		try {
			await axios.post(`${URL}`, {
				nombre,
				nit,
				contacto: {
					nombre: contactoNombre,
					email: contactoEmail,
					telefono: contactoTelefono,
				},
				direccion: {
					calle,
					ciudad,
					estado,
					codigoPostal,
				},
			});
			navigate("/proveedores");
		} catch (error) {
			console.error("Error al actualizar el proveedor:", error);
		}
	};

	return (
		<div className="container">
			<h1>Agregar Proveedor</h1>
			<form onSubmit={guardarProveedor}>
				<div className="mb-3">
					<label className="form-label">Nombre</label>
					<input
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">NIT</label>
					<input
						value={nit}
						onChange={(e) => setNit(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Nombre de Contacto</label>
					<input
						value={contactoNombre}
						onChange={(e) => setContactoNombre(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Email de Contacto</label>
					<input
						value={contactoEmail}
						onChange={(e) => setContactoEmail(e.target.value)}
						type="email"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Teléfono de Contacto</label>
					<input
						value={contactoTelefono}
						onChange={(e) => setContactoTelefono(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Calle</label>
					<input
						value={calle}
						onChange={(e) => setCalle(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Ciudad</label>
					<input
						value={ciudad}
						onChange={(e) => setCiudad(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Estado</label>
					<input
						value={estado}
						onChange={(e) => setEstado(e.target.value)}
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Código Postal</label>
					<input
						value={codigoPostal}
						onChange={(e) => setCodigoPostal(e.target.value)}
						type="text"
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
						navigate("/proveedores");
					}}
					className="btn btn-primary"
				>
					<i className="bi bi-arrow-left-circle"></i> Volver
				</button>
			</form>
		</div>
	);
}

export default AgregarProveedor;
