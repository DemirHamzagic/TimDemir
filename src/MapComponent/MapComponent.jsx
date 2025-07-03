import "./MapComponent.css";
import "leaflet/dist/leaflet.css";
import markerIcon1 from "../assets/MarkerImages/markerImage1.png";
import markerIcon2 from "../assets/MarkerImages/markerImage2.png";
import markerIcon3 from "../assets/MarkerImages/markerImage3.png";
import markerIcon4 from "../assets/MarkerImages/markerImage4.png";
import { MarkerLocations } from "./MarkerLocations";
import { FaHeart } from "react-icons/fa";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { MapContext } from "../components/ContextFile";
import { useContext, useEffect } from "react";
import CategoryButtons from "./CategoryButtons";

export default function MapComponent() {
	const {
		setSlideBar,
		setLocationCard,
		category,
		showSavedLoc,
		LocationCard,
		isSaved,
		setIsSaved,
	} = useContext(MapContext);

	useEffect(() => {
		setIsSaved(LocationCard.saved);
	}, [LocationCard]);

	const mark =
		category === ""
			? MarkerLocations
			: MarkerLocations.filter((el) => el.category === category);
	const markers = showSavedLoc
		? mark.filter((el) => el.saved === showSavedLoc)
		: mark;

	const hotelLogo = new Icon({
		iconUrl: markerIcon1,
		iconSize: [70, 70],
	});
	const cultureLogo = new Icon({
		iconUrl: markerIcon2,
		iconSize: [70, 70],
	});
	const restaurantLogo = new Icon({
		iconUrl: markerIcon3,
		iconSize: [70, 70],
	});
	const otherLogo = new Icon({
		iconUrl: markerIcon4,
		iconSize: [70, 70],
	});
	const iconLogo = {
		Hotel: hotelLogo,
		Other: otherLogo,
		Restaurant: restaurantLogo,
		Culture: cultureLogo,
	};
	return (
		<div>
			<CategoryButtons />
			<MapContainer center={[43.1384, 20.5151]} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{markers.map((el) => (
					<Marker
						key={el.name}
						eventHandlers={{
							popupopen: () => setSlideBar("0rem"),
							popupclose: () => setSlideBar("-31rem"),
							click: () => setLocationCard(el),
						}}
						position={el.location}
						icon={iconLogo[el.category]}
					>
						<Popup>
							<img className="mapMarkerImage" src={el.image} />
							<div className="markerPopUp">
								<div>
									<h1 className="mapMarkerName">{el.name}</h1>
									<p className="mapMarkerText">{el.text}</p>
								</div>
								<div
									style={{
										transition: "border 0.3s ease",
										border: !isSaved
											? "2px solid rgb(0, 81, 255)"
											: "2px solid red",
									}}
									className="mapHeartBox"
									onClick={() => {
										setIsSaved(!isSaved);
										LocationCard.saved =
											!LocationCard.saved;
									}}
								>
									<FaHeart
										style={{
											transition: "color 0.3s ease",
											color: !isSaved
												? " rgb(0, 81, 255)"
												: "red",
										}}
										className="mapMarkerHeart"
									/>
								</div>
							</div>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}
