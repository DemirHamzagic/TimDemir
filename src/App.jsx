import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationDetails from "./MapComponent/LocationDetails";
import MapComponent from "./MapComponent/MapComponent";
import Onama from "./pages/Onama";
import Contact from "./pages/Kontakt";
import Pocetna from "./pages/Pocetna";

function App() {
	return (
		<BrowserRouter>
			<LocationDetails />
			<Header />
			<Routes>
				<Route path="/" element={<Pocetna />} />
				<Route path="/Onama" element={<Onama />} />
				<Route path="/lokacije" element={<MapComponent />} />
				<Route path="/kontakt" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
