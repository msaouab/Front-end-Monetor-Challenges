import { styled } from "styled-components";
import Head from "./Head";
import LeafletMap from "./LeafletMap";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	& > :nth-child(1) {
		z-index: 1;
	}
	& > :nth-child(2) {
		z-index: 0;
	}
`;

function App() {
	return (
		<AppContainer>
			<Head />
			<LeafletMap />
		</AppContainer>
	);
}

export default App;
