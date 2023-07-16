import styled from "styled-components";
import Logo from "./assets/logo.svg";
import { NavItem } from "./data/data";
import { useState } from "react";

const NavStyle = styled.nav`
	position: fixed;
	width: 100%;
	display: flex;
	.logo {
		display: flex;
	}
	ul {
		display: flex;
		gap: 8rem;
		list-style: none;
		& > li {
			cursor: pointer;
			padding: 2rem 0;
			border: 0;
			border-bottom: .2rem solid hsl(var(--clr-white) / 0);
			& > a {
				font-family: var(--ff-sans-cond);
				color: hsl(var(--clr-white));
				letter-spacing: 2.7px;
			}
		}
		.active {
			border-bottom: .2rem solid hsl(var(--clr-white));
		}
		& > li:hover {
			border-bottom: .2rem solid hsl(var(--clr-white) / .5);
		}
	}
`;

const NavBar = () => {
	const [active, setActive] = useState(0);

	return (
		<NavStyle className="debug">
			<a className="logo" href="/">
				<img src={Logo} alt="space tourism logo" className="imgLogo" />
			</a>
			<ul className="">
				{NavItem.map((item, index) => (
					<li key={index} onClick={() => setActive(index)} className={`${active === index ? 'active' : ''}`}>
						<a href={item.link}>
							<span>{item.id} </span>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</NavStyle>
	);
};

export default NavBar;
