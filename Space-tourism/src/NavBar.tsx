import styled from "styled-components";
import Logo from "./assets/logo.svg";
import { NavItem } from "./data/data";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const NavStyle = styled.nav`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.logo {
		display: flex;
		margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
	}
	& > .button {
		display: none;
	}
	ul {
		display: flex;
		list-style: none;
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(40.774227142333984px);
		& > li {
			cursor: pointer;
			padding: 2rem 0;
			border: 0;
			border-bottom: 0.2rem solid hsl(var(--clr-white) / 0);
			& > a {
				font-family: var(--ff-sans-cond);
				color: hsl(var(--clr-white));
				letter-spacing: 2.7px;
			}
		}
		& > li:hover {
			border-bottom: 0.2rem solid hsl(var(--clr-white) / 0.5);
		}
		& > .active {
			border-bottom: 0.2rem solid hsl(var(--clr-white));
		}
	}
	@media (min-width: 40em) and (max-width: 64em) {
		& > ul {
			& > li {
				& > a span {
					display: none;
				}
			}
		}
	}
	@media (max-width: 40em) {
		align-items: flex-start;
		& > .button {
			display: flex;
			align-items: center;
			border: 1px solid red;
			position: absolute;
			top: 2.5rem;
			right: 1.5rem;
			cursor: pointer;
			width: 3rem;
			height: 3rem;
		}
		& > ul {
			flex-direction: column;
			transform: translateX(100%);
			transition: transform 500ms ease-in-out;
		}
	}
`;

const NavBar = () => {
	const [active, setActive] = useState(0);
	const [isOpen, setIsOpen] = useState(true);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<NavStyle className={` ${isOpen ? "open" : ""}`}>
			<a className="logo" href="/">
				<img src={Logo} alt="space tourism logo" className="imgLogo" />
			</a>
			<div
				className="mobile-nav-toggle btn button"
				aria-controls="primary-navigation"
				onClick={handleToggle}
			>
				<span className="sr-only" aria-expanded="false">
					<Hamburger toggled={isOpen} toggle={handleToggle} color="#fff" />
				</span>
			</div>
			<ul className="flex">
				{NavItem.map((item, index) => (
					<li
						key={index}
						onClick={() => setActive(index)}
						className={`${active === index ? "active" : ""}`}
					>
						<a href={item.link} onClick={() => setIsOpen(false)}>
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
