import styled from "styled-components";
import imgProfile from "./assets/image-profile-desktop.webp";
import BtnContact from "./components/BtnContact";
import NavBar from "./NavBar";

const ProfileContainer = styled.section`
	& > section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		& > article {
			width: 50%;
		}
		& > img {
			width: 40%;
			position: absolute;
			z-index: -1;
		}
	}
`;

const Profile = () => {
	return (
		<ProfileContainer className="debug">
			<NavBar />
			<section>
				<article>
					<h2>
						Nice to meet you! I'm
						<span>Adam Keyes</span>.
					</h2>
					<p>
						Based in the UK, I'm a front-end developer passionate about building
						accessible web apps that users love.
					</p>
					<BtnContact text="contact me" />
				</article>
				<img src={imgProfile} alt="img Profile" />
			</section>
		</ProfileContainer>
	);
};

export default Profile;
