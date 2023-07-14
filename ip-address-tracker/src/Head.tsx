import { styled } from "styled-components";
import BackDesk from "./assets/pattern-bg-desktop.png";
import Info from "./Info";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeadContainer = styled.div`
	background-image: url(${BackDesk});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 21.9rem;
	color: white;
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	& > header {
		padding: 2rem;
		width: 85%;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		.title {
			font-weight: var(--fontMed);
		}
		& > form {
			width: 49%;
			display: flex;
			justify-content: center;
			align-items: center;
			& > input {
				width: 100%;
				padding: 1.2rem;
				border-radius: 1rem 0 0 1rem;
				font-size: var(--fontMed);
				border: none;
				font-size: 1.1rem;
			}
			& > button {
				width: 4rem;
				padding: .6rem;
				border-radius: 0 1rem 1rem 0;
				background-color: black;
				border: 1px solid transparent;
				& > svg {
					font-size: var(--fontMed);
					color: white;
					width: 2rem;
					height: 2rem;
				}
				cursor: pointer;
			}
		}
	}
	& > :nth-child(2) {
		position: absolute;
		bottom: -4.5rem;
	}
`;

const Head = () => {
	const [search, setSearch] = useState("");
	const [Ip, setIp] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIp(search);
		setSearch("");
	};

	return (
		<HeadContainer className="">
			<header>
				<h1 className="title">IP Address Tracker</h1>
				<form>
					<input
						type="text"
						name="searchBar"
						id="searchBar"
						placeholder="Search for any IP address or domain"
						onChange={handleChange}
						value={search}
						autoComplete="off"
					/>
					<button type="submit" onClick={handleClick}>
						<MdKeyboardArrowRight />
					</button>
				</form>
			</header>
			<Info Ip={Ip}/>
		</HeadContainer>
	);
};

export default Head;
