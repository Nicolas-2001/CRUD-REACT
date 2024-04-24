import { Route, Routes } from "react-router-dom";
import MostrarClientes from "../Components/ComponentesClientes/MostrarClientes";
import AgregarCliente from "../Components/ComponentesClientes/AgregarClientes";
import EditarCliente from "../Components/ComponentesClientes/EditarCliente";
import MostrarProductos from "../Components/ComponentesProductos/MostrarProductos";
import AgregarProductos from "../Components/ComponentesProductos/AgregarProductos";
import EditarProducto from "../Components/ComponentesProductos/EditarProducto";
import MostrarProveedores from "../Components/ComponenteProveedores/MostrarProveedores";
import EditarProveedor from "../Components/ComponenteProveedores/EditarProveedor";
import AgregarProveedor from "../Components/ComponenteProveedores/AgregaProveedor";

function Rutas() {
	return (
		<Routes>
			<Route path="/" element={<MostrarClientes />}></Route>
			<Route path="/clientes" element={<MostrarClientes />}></Route>
			<Route
				path="/clientes/agregar"
				element={<AgregarCliente />}
			></Route>
			<Route
				path="/clientes/editar/:id"
				element={<EditarCliente />}
			></Route>
			<Route path="/productos" element={<MostrarProductos />}></Route>
			<Route
				path="/productos/agregar"
				element={<AgregarProductos />}
			></Route>
			<Route
				path="/productos/editar/:id"
				element={<EditarProducto />}
			></Route>
			<Route
				path="/proveedores/agregar"
				element={<AgregarProveedor />}
			></Route>
			<Route path="/proveedores" element={<MostrarProveedores />}></Route>
			<Route
				path="/proveedores/editar/:id"
				element={<EditarProveedor />}
			></Route>
		</Routes>
	);
}

export default Rutas;
