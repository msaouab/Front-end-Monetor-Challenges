import { styled } from "styled-components";
import BackDesk from "./assets/pattern-bg-desktop.png";
import Info from "./Info";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
import { AppContext } from "./AppContext";

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

interface InfoData {
	ip: string;
	isp: string;
	location: {
		country: string;
		region: string;
		city: string;
		lat: number;
		lng: number;
		postalCode: string;
		timezone: string;
		geonameId: number;
	};
}

const Head = () => {
	const [search, setSearch] = useState("");
	const [Ip, setIp] = useState("192.212.174.101");
	const { setPosition } = AppContext

	const [data, setData] = useState<InfoData | null>(null);

	const isValidIpAddress = (ipaddress: string) => {
		const ipformat = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
		if (ipaddress.match(ipformat)) {
			return true;
		}
	};

	useEffect(() => {
		if (!Ip || !isValidIpAddress(Ip)) return;
		console.log(Ip)
		axios
			.get(
				`https://geo.ipify.org/api/v2/country,city?apiKey=at_1AEOTEng3zs2v9Wm9IHoY6VH1rZPs&ipAddress=${Ip}`
			)
			.then((res) => {
				setData(res.data);
				setPosition([res.data.location.lat, res.data.location.lng]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [Ip]);

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
			<Info ip={data?.ip} isp={data?.isp} location={data?.location}/>
		</HeadContainer>
	);
};

export default Head;
