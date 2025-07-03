import "./MapComponent.css";
import { TbCategory } from "react-icons/tb";
import { MdRestaurant } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { PiCastleTurretFill } from "react-icons/pi";
import { useState, useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MapContext } from "../components/ContextFile";
import { TbWorld } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";

export default function CategoryButtons() {
	const { setCategory, category, showSavedLoc, setSavedLoc } =
		useContext(MapContext);
	const [position, setPosition] = useState(true);
	const aCategory = {
		color: "rgb(0, 81, 255)",
	};
	const iaCategory = {
		color: "black",
	};
	return (
		<div className="categoryDiv">
			<div className="mainButton" onClick={() => setPosition(!position)}>
				<TbCategory className="categoryIcon" />
				Categories
				<p className="openText">{position ? "Open" : "Close"}</p>
			</div>
			<div
				className="categories"
				style={
					position
						? { opacity: 0, transform: "translateX(35rem)" }
						: { opacity: 1, transform: "translateX(0)" }
				}
			>
				<div
					style={category === "" ? aCategory : iaCategory}
					className="categoryButton"
					onClick={() => setCategory("")}
				>
					<TbWorld className="categoryIcon" /> All
				</div>
				<div
					style={category === "Restaurant" ? aCategory : iaCategory}
					className="categoryButton"
					onClick={() => setCategory("Restaurant")}
				>
					<MdRestaurant className="categoryIcon" /> Restaurants
				</div>
				<div
					style={category === "Hotel" ? aCategory : iaCategory}
					className="categoryButton"
					onClick={() => setCategory("Hotel")}
				>
					<FaBed className="categoryIcon" /> Hotels
				</div>
				<div
					style={category === "Culture" ? aCategory : iaCategory}
					className="categoryButton"
					onClick={() => setCategory("Culture")}
				>
					<PiCastleTurretFill className="categoryIcon" /> Cultural
					objects
				</div>
				<div
					style={category === "Other" ? aCategory : iaCategory}
					className="categoryButton"
					onClick={() => setCategory("Other")}
				>
					<FaCartShopping className="categoryIcon" /> Stores & Other
				</div>
			</div>
			<div
				style={showSavedLoc ? aCategory : iaCategory}
				className="saveButton"
				onClick={() => setSavedLoc(!showSavedLoc)}
			>
				<FaRegBookmark className="categoryIcon" /> Saved
			</div>
		</div>
	);
}
