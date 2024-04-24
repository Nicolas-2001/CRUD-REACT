import "../Assets/Styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./../Config/Rutas";
import NavegationBar from "../Config/NavBar";
import Footer from "../Config/Footer";

function App() {
	return (
		<div className="App">
			<NavegationBar />
			<Router>
				<Rutas />
			</Router>
			<Footer />
		</div>
	);
}

export default App;
