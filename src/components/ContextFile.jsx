import { createContext, useState } from "react";

export const MapContext = createContext();

export default function ContextProvider({ children }) {
	const [slideBar, setSlideBar] = useState("-31rem");
	const [LocationCard, setLocationCard] = useState([]);
	const [category, setCategory] = useState("");
	const [showSavedLoc, setSavedLoc] = useState(false);
	const [isSaved, setIsSaved] = useState(false);

	return (
		<MapContext.Provider
			value={{
				slideBar,
				setSlideBar,
				LocationCard,
				setLocationCard,
				category,
				setCategory,
				showSavedLoc,
				setSavedLoc,
				isSaved,
				setIsSaved,
			}}
		>
			{children}
		</MapContext.Provider>
	);
}
