import styled from "styled-components";
import HeaderDesign from "./HeaderDesign";

const StyledHeader = styled.header`
	.content {
		padding: 10rem;
		margin-bottom: 8rem;

		display: grid;
		justify-items: center;
	}

	h1 {
		text-transform: uppercase;
		font-size: 150px;
		font-weight: 200;
		letter-spacing: 0.5rem;
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
					<div className="icons"></div>
				</div>
			</HeaderDesign>
		</StyledHeader>
	);
};

export default Header;
