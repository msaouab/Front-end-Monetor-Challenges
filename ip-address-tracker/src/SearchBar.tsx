import { styled } from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const SearchBarStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	& > form {
		width: 50%;
		display: flex;
		& > input {
			border: none;
			width: 100%;
			padding: 1.2rem;
			border-radius: 1rem 0 0 1rem;
			font-size: var(--fontMed);
		}
		& > button {
			width: 4rem;
			/* padding: 1.2rem; */
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
`;

const SearchBar = () => {
	const [search, setSearch] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setSearch("");
	};

	return (
		<SearchBarStyle>
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
		</SearchBarStyle>
	);
};

export default SearchBar;