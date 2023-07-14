import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Home from "./Home";

const AppContainer = styled.div``;

const RoutesStyle = styled.div``;

function AppRouter() {
	return (
		<BrowserRouter>
			<RoutesStyle>
				<header>
					<NavBar />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
			</RoutesStyle>
		</BrowserRouter>
	);
}

function App() {
	return (
		<AppContainer>
			<AppRouter />
		</AppContainer>
	);
}

export default App;
