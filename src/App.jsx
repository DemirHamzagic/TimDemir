import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationDetails from "./MapComponent/LocationDetails";
import MapComponent from "./MapComponent/MapComponent";

function App() {
	return (
		<BrowserRouter>
			<LocationDetails />
			<Header />
			<Routes>
				<Route path="/" element={<MapComponent />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
