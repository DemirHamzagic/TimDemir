import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationDetails from "./MapComponent/LocationDetails";
import MapComponent from "./MapComponent/MapComponent";
import Onama from "./pages/Onama";
import Contact from "./pages/Kontakt";

function App() {
	return (
		<BrowserRouter>
			<LocationDetails />
			<Header />
			<Routes>
				<Route path="/" element={<MapComponent />} />
				<Route path="/Onama" element={<Onama />} />
				<Route path="/kontakt" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
