import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const InfoContainer = styled.ul`
	display: flex;
	width: 85%;
	justify-content: space-evenly;
	align-items: center;
	padding: 2.5rem;
	background-color: white;
	color: var(--dark-gray);
	border-radius: 1rem;
	& > li {
		list-style: none;
		display: flex;
		column-gap: 5rem;
		& > .text {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			& > .value {
				color: var(--very-dark-gray);
				font-size: 1.56rem;
				font-weight: var(--fontMed);
			}
		}
		& > .line {
			width: 1px;
			height: 5rem;
			background-color: #dee2e6;
		}
	}
`;

// const Ip = "192.123.33.3";

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

interface InfoProps {
	Ip: string;
}

const Info: React.FC<InfoProps> = ({Ip}) => {
	const [data, setData] = useState<InfoData | null>(null);

	const isValidIpAddress = (ipaddress: string) => {
		const ipformat = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
		if (ipaddress.match(ipformat)) {
			return true;
		}
	};

	useEffect(() => {
		if (!Ip || !isValidIpAddress(Ip)) return;
		console.log("this is the ip:", Ip);
		axios
			.get(
				`https://geo.ipify.org/api/v2/country,city?apiKey=at_1AEOTEng3zs2v9Wm9IHoY6VH1rZPs&ipAddress=${Ip}`
			)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [Ip]);

	if (!data) return <div>Loading...</div>;

	return (
		<InfoContainer>
			<li>
				<div className="text Ip">
					IP Address
					<span className="value IpValue">{data.ip}</span>
				</div>
				<div className="line"></div>
			</li>
			<li>
				<div className="text Loc">
					Location
					<span className="value LocValue">{`${data.location.region}, ${data.location.city}`}</span>
				</div>
				<div className="line"></div>
			</li>
			<li>
				<div className="text Time">
					Timezone
					<span className="value TimeValue">{`UTC${data.location.timezone}`}</span>
				</div>
				<div className="line"></div>
			</li>
			<li>
				<div className="text Isp">
					ISP
					<span className="value IspValue">{`${data.isp}`}</span>
				</div>
			</li>
		</InfoContainer>
	);
};

export default Info;

// https://geo.ipify.org/api/v2/country,city?apiKey=at_1AEOTEng3zs2v9Wm9IHoY6VH1rZPs&ipAddress=8.8.8.8
