import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { AppContext } from "./AppContext";

const LeafletMap = () => {
	const { position } = AppContext
	// const position = [34.04915, -118.09462];
	const mapZoom = 13;
	return (
			<MapContainer
				center={position}
				zoom={mapZoom}
				style={{ height: "100%", width: "100%", position: "relative" }}
				className="map"
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={position}>
					<Popup>A sample marker.</Popup>
				</Marker>
			</MapContainer>
	);
};

export default LeafletMap;

