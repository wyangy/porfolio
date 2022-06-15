import styled from "styled-components";
import HeaderDesign from "./HeaderDesign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
	.content {
		display: grid;
		justify-items: center;
		grid-gap: 0.7rem;

		padding: 3rem 0 2rem;
		margin-bottom: 3rem;

		@media (min-width: 600px) {
			padding: 4rem 0 2rem;
			margin-bottom: 4rem;
		}

		@media (min-width: 1024px) {
			padding: 5rem 0 3rem;
			margin-bottom: 5rem;
		}
	}

	h1 {
		text-transform: uppercase;
		font-size: 36px;
		font-weight: 200;
		letter-spacing: 0.5rem;

		@media (min-width: 600px) {
			font-size: 60px;
			letter-spacing: 0.7rem;
		}

		@media (min-width: 800px) {
			font-size: 80px;
		}

		@media (min-width: 1024px) {
			font-size: 100px;
			font-weight: 100;
			letter-spacing: 0.9rem;
		}

		@media (min-width: 1280px) {
			font-size: 110px;
		}
	}

	p {
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<HeaderDesign>
				<div className="content">
					<h1>Wendy Yang</h1>
					<p>Full-stack web developer</p>
					<div className="icons">
						<FontAwesomeIcon icon={faLinkedin} />
						<FontAwesomeIcon icon={faGithub} />
						<FontAwesomeIcon icon={faEnvelope} />
					</div>
				</div>
			</HeaderDesign>
		</StyledHeader>
	);
};

export default Header;
