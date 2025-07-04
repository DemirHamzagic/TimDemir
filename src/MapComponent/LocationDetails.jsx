import "../styles/MapComponent.css";
import { MapContext } from "../components/ContextFile";
import { useContext, useEffect } from "react";

import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default function LocationDetails() {
	const { slideBar, setSlideBar, LocationCard, isSaved, setIsSaved } =
		useContext(MapContext);

	useEffect(() => {
		setIsSaved(LocationCard.saved);
	}, [LocationCard]);

	return (
		<div style={{ left: slideBar }} className="mapInfoDiv">
			<div onClick={() => setSlideBar("-31rem")} className="closeButton">
				<IoMdClose className="closeSymbol" />
				<p className="closeText">Close</p>
			</div>
			<img src={LocationCard.image} className="detailImage" />
			<div className="detailDivText">
				<div className="heartDiv">
					<div
						style={{
							transition: "border 0.3s ease",
							border: !isSaved
								? "2px solid rgb(0, 81, 255)"
								: "2px solid red",
						}}
						className="heartBox"
						onClick={() => {
							setIsSaved(!isSaved);
							LocationCard.saved = !LocationCard.saved;
						}}
					>
						<FaHeart
							style={{
								transition: "color 0.3s ease",
								color: !isSaved ? " rgb(0, 81, 255)" : "red",
							}}
							className="locationHeart"
						/>
					</div>
					<p className="heartText">{!isSaved ? "Save" : "Unsave"}</p>
				</div>
				<h1 className="detailHeader">{LocationCard.name}</h1>
				<p className="locationCategory">{LocationCard.text}</p>
			</div>

			<div className="detailDivLocation">
				<h1 className="detailHeader">Location</h1>
				<p className="addressText">
					<MdOutlineLocationOn className="addressIcon" />
					{LocationCard.address}
				</p>
				<p className="detailCoords">
					<TbWorld className="addressIcon" />
					Lat & Lon:
					{LocationCard.length === 0 ? (
						<p>Loading...</p>
					) : (
						<span className="detailCoordsSpan">
							{LocationCard.location[0].toFixed(5)},{" "}
							{LocationCard.location[1].toFixed(5)}
						</span>
					)}
				</p>
			</div>

			<div className="detailDivAbout">
				<h1 className="detailHeader">About</h1>
				<p>{LocationCard.about}</p>
			</div>
		</div>
	);
}
