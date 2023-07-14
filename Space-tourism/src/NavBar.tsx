import styled from "styled-components";
import Logo from "./assets/logo.svg";
import { NavItem } from "./data/data";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavStyle = styled.nav`
	position: fixed;
	width: 95%;
	top: 2.5rem;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.logo {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		cursor: pointer;
		img {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
		}
	}
	ul {
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(40.774227142333984px);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60%;
		li {
			/* padding: 2.5rem; */
			list-style: none;
			padding: 2.5rem 0;
			cursor: pointer;
			& > a {
				text-decoration: none;
				color: #fff;
				font-family: 'Barlow Condensed', sans-serif;
				font-weight: 400;
				font-size: 16px;
				& > span {
					font-weight: 700;
					letter-spacing: 2px;
				}
			}
		}
		.active {
			border-bottom: 3px solid white;
		}
		& > li:hover {
			border-bottom: 3px solid white;
			opacity: 0.5021478533744812;
		}
	}
`;

const NavBar = () => {
	const [active, setActive] = useState(0);

	return (
		<NavStyle>
			<Link className="logo" to={"/"}>
				<img src={Logo} alt="logo" />
			</Link>
			<ul className="debug">
				{NavItem.map((item, index) => (
					<li key={index} onClick={() => setActive(index)} className={`${active === index ? 'active' : ''}`}>
						<Link to={item.link}>
							<span>{item.id} </span>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</NavStyle>
	);
};

export default NavBar;
// {`${item.id} ${item.title}`}