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

interface InfoData {
	ip?: string;
	isp?: string;
	location?: {
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

const Info: React.FC<InfoData> = ({ip, isp, location }) => {

	const {region, city, timezone} = location || {};

	return (
		<InfoContainer>
			<li>
				<div className="text Ip">
					IP Address
					{ip && <span className="value IpValue">{ip}</span>}
				</div>
				<div className="line"></div>
			</li>
			<li>
				<div className="text Loc">
					Location
					{region && city && <span className="value LocValue">{`${region}, ${city}`}</span>}
				</div>
				<div className="line"></div>
			</li>
			<li>
				<div className="text Time">
					Timezone
					{timezone && <span className="value TimeValue">{`UTC${timezone}`}</span>}
				</div>
				<div className="line"></div>
			</li>
			<li>
				<div className="text Isp">
					ISP
					{isp && <span className="value IspValue">{`${isp}`}</span>}
				</div>
			</li>
		</InfoContainer>
	);
};

export default Info;

// https://geo.ipify.org/api/v2/country,city?apiKey=at_1AEOTEng3zs2v9Wm9IHoY6VH1rZPs&ipAddress=8.8.8.8
