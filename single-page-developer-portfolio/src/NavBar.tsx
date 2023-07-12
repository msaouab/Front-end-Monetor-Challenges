import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	& > span {
		font-size: 2rem;
		font-weight: 900;
		letter-spacing: -0.4px;
		color: #fff;
	}
	& > nav {
		display: flex;
		column-gap: 1.6rem;
		justify-content: center;
		align-items: center;
		& > a {
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			& > svg {
				width: 1.3rem;
				height: 1.3rem;
			}
		}
		& > a:hover {
			color: hsl(var(--color-highlight));
		}
	}
`;

const NavBar = () => {
	return (
		<NavContainer>
			<span>adamkeyes</span>
			<nav>
				<a><AiFillGithub /></a>
				<a><SiFrontendmentor /></a>
				<a><AiFillLinkedin /></a>
				<a><AiOutlineTwitter /></a>
			</nav>
		</NavContainer>
	);
};

export default NavBar;
