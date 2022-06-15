import styled from "styled-components";
import FooterDesign from "./FooterDesign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.header`
	.content {
		display: grid;
		grid-template-columns: max-content max-content max-content;
		justify-content: center;
		grid-gap: 1rem;

		padding: 2rem 0;
		margin-top: 3rem;

		@media (min-width: 600px) {
			margin-top: 4rem;
			font-size: 20px;
		}

		@media (min-width: 1024px) {
			margin-top: 5rem;
		}
	}

	a {
		color: #212121;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<FooterDesign>
				<div className="content">
					<a href="mailto: wyangynz@gmail.com">
						<FontAwesomeIcon icon={faEnvelope} className="icon" />
					</a>
					<a
						title="link to LinkedIn"
						href="https://www.linkedin.com/in/wyangynz/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} className="icon" />
					</a>
					<a
						title="link to GitHub"
						href="https://github.com/wyangy"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} className="icon" />
					</a>
				</div>
			</FooterDesign>
		</StyledFooter>
	);
};

export default Footer;
