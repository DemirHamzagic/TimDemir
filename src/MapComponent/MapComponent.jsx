import "./MapComponent.css";
import "leaflet/dist/leaflet.css";
import markerIcon from "../assets/markerImage.png";
import { MarkerLocations } from "./MarkerLocations";

import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";

export default function MapComponent() {
	const markers = MarkerLocations;

	const iconLogo = new Icon({
		iconUrl: markerIcon,
		iconSize: [70, 70],
	});
	return (
		<div>
			<h1 className="mapHeaderText">Mapa za webStranicu</h1>
			<MapContainer center={[43.1384, 20.5151]} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{markers.map((el) => (
					<Marker position={el.location} icon={iconLogo}>
						<Popup>
							<h1>{el.popUp}</h1>
							<p>Dzamila nije tu</p>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}
