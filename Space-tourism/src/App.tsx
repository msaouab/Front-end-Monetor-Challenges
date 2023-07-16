import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Home from "./Home";

const AppContainer = styled.div`
	/* height: 100vh; */
`;

const RoutesStyle = styled.div``;

function AppRouter() {
	return (
		<BrowserRouter>
			<RoutesStyle>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</RoutesStyle>
		</BrowserRouter>
	);
}

function App() {
	return (
		<AppContainer>
			<header>
				<NavBar />
			</header>
				<AppRouter />
		</AppContainer>
	);
}

export default App;
