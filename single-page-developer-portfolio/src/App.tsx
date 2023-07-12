import styled from "styled-components";
import Profile from "./Profile";

const AppContainer = styled.div`
	width: 84%;
	margin: 0 auto;
`;

function App() {
	return (
		<AppContainer>
			<Profile />
		</AppContainer>
	);
}

export default App;
