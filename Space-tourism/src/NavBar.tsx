import styled from "styled-components";
import Logo from "./assets/logo.svg";
import { NavItem } from "./data/data";
import { useEffect, useRef, useState } from "react";
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
			text-decoration: none;
			& > a {
				font-family: var(--ff-sans-cond);
				color: hsl(var(--clr-white));
				letter-spacing: 2.7px;
				& > span {
					font-weight: 700;
					margin-top: 0.5em;
				}
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
	@media (max-width: 719px) {
		align-items: flex-start;
		.logo {
		}
		& > .button {
			display: flex;
			/* align-items: center; */
			/* justify-content: center; */
			width: 3rem;
			height: 3rem;
			position: absolute;
			top: 1.5rem;
			right: 1.5rem;
			z-index: 2000;
			cursor: pointer;
			& > span {
				width: 100%;
				height: 100%;
			}
		}
		& > ul {
			/* height: 100vh; */
			--underline-gap: 0.5rem;
			position: fixed;
			z-index: 10000000;
			inset: 0 0 0 30%;
			list-style: none;
			padding: min(20rem, 15vh) 2rem;
			margin: 0;
			flex-direction: column;
			transform: translateX(100%);
			transition: transform 500ms ease-in-out;
			& > li {
				padding: 0 1rem;
			}
			& > li:hover {
				border: 0;
				border-right: 0.2rem solid hsl(var(--clr-white) / 0.5);
			}
			& > .active {
				border: 0;
				border-right: 0.2rem solid hsl(var(--clr-white));
			}
		}
		&.open {
			position: relative;
			& > ul {
				transform: translateX(0);
				z-index: 200;
			}
		}
	}
`;

const NavBar = () => {
	const [active, setActive] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef<HTMLUListElement>(null);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {

		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		window.addEventListener("click", handleClickOutside)
		return () => {
			window.removeEventListener("click", handleClickOutside)
		}
	}, []);

	return (
		<NavStyle className={` ${isOpen ? "open" : ""}`} ref={navRef}>
			<a className="logo" href="/">
				<img src={Logo} alt="space tourism logo" className="imgLogo" />
			</a>
			<div
				className="mobile-nav-toggle btn button"
				// aria-controls="primary-navigation"
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
