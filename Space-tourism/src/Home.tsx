import styled from "styled-components";
import BgDes from './assets/home/background-home-desktop.jpg'

const HomeStyle = styled.div`
	background-image: url(${BgDes});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 100vh;
	
`;

const Home = () => {
	return (
		<HomeStyle></HomeStyle>
	)
};

export default Home;