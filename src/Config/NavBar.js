function NavegationBar() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<a
					className="navbar-brand"
					href="/"
					style={{ marginLeft: "2rem", color: "white" }}
				>
					Talento Tech
				</a>
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a
							className="nav-link"
							href="/clientes"
							style={{ color: "white" }}
						>
							Clientes
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="/productos"
							style={{ color: "white" }}
						>
							Productos
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="/"
							style={{ color: "white" }}
						>
							Proovedores
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavegationBar;
