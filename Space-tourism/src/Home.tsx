import styled from "styled-components";
import BgDes from "./assets/home/background-home-desktop.jpg";
import BgTab from "./assets/home/background-home-tablet.jpg";
import BgMob from "./assets/home/background-home-mobile.jpg";

const HomeStyle = styled.main`
	background-image: url(${BgMob});
	/* background-repeat: no-repeat; */
	background-size: cover;
	background-position: bottom center;
	& > section {
		height: 100vh; 
		/* max-width: 60rem; */
		& > article {
			& > h1 {
				color: hsl(var(--clr-light));
				font-size: var(--fs-500);
				font-family: var(--ff-sans-cond);
				letter-spacing: 4.75px;
				& > span {
					color: hsl(var(--clr-white));
					font-family: var(--ff-serif);
					font-size: var(--fs-900);
					display: block;
				}
			}
			& > p {
				color: hsl(var(--clr-light));
			}
		}
		.linkExplore {
			& > a {
				/* position: relative; */
				z-index: 1;
				display: inline-grid;
				place-items: center;
				padding: 0 2em;
				border-radius: 50%;
				aspect-ratio: 1;
				text-decoration: none;
				font-family: var(--ff-serif);
				font-size: 2rem;
				text-transform: uppercase;
				color: hsl(var(--clr-dark));
				background: hsl(var(--clr-white));
			}
			& > a:hover,
			& > a:focus {
				&::after {
					opacity: 1;
					transform: scale(1.5);
				}
			}
			& > a::after {
				content: "";
				position: absolute;
				z-index: -1;
				width: 100%;
				height: 100%;
				background: hsl(var(--clr-white) / 0.1);
				border-radius: 50%;
				opacity: 0;
				transition: opacity 500ms linear, transform 750ms ease-in-out;
			}
		}
	}
	@media (min-width: 35rem) {
		background-image: url(${BgTab});
		background-position: center center;
	}
	@media (min-width: 45rem) {
		background-image: url(${BgDes});
	}
`;

const Home = () => {
	return (
		<HomeStyle className="">
			<section className="grid-container grid-container--home">
				<article>
					<h1 className="">
						SO, YOU WANT TO TRAVEL TO
						<span>SPACE</span>
					</h1>
					<p>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</article>
				<div className="linkExplore">
					<a href={"/"}>Explore</a>
				</div>
			</section>
		</HomeStyle>
	);
};

export default Home;
