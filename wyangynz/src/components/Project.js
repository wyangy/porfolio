import styled from "styled-components";
import Heading from "./Heading";

const StyledListItem = styled.li`
	background: linear-gradient(150deg, #212121 15px, snow 0) top left,
		linear-gradient(-150deg, #212121 15px, snow 0) top right,
		linear-gradient(-30deg, #212121 15px, snow 0) bottom right,
		linear-gradient(30deg, #212121 15px, snow 0) bottom left;
	background-size: 60% 60%;
	background-repeat: no-repeat;

	display: flex;
	justify-content: center;

	.border {
		border-top: 2px solid #212121;
		border-bottom: 2px solid #212121;
		width: 80%;
		margin: 2rem 1rem 2rem;
		padding-bottom: 1rem;
	}

	.content {
		max-width: 35rem;
		width: 100%;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		font-size: 16px;

		@media (min-width: 600px) {
			font-size: 18px;
		}
	}

	img {
		max-width: 40rem;
		width: 100%;
		margin-bottom: 1rem;
		border-radius: 0.5rem;
	}

	p {
		line-height: 1.4;
	}

	span {
		font-style: italic;
	}

	button {
		margin: 1.5rem auto 0;
		padding: 1rem;
		width: 15rem;
		color: white;
		text-transform: uppercase;
		font-weight: 900;
		letter-spacing: 0.15rem;
		word-spacing: 0.2rem;

		border-style: none;

		background: linear-gradient(135deg, snow 7px, #212121 0) top left,
			linear-gradient(-135deg, snow 7px, #212121 0) top right,
			linear-gradient(-45deg, snow 7px, #212121 0) bottom right,
			linear-gradient(45deg, snow 7px, #212121 0) bottom left;
		background-size: 60% 60%;
		background-repeat: no-repeat;
	}
`;

const Project = ({ project }) => {
	const { title, image, description, technology, url } = project;

	return (
		<StyledListItem>
			<div className="border">
				<Heading text={title} />
				<div className="content">
					<img src={require(`../images/${image}`)} alt={title} />
					<p>{description}</p>
					<span>Technology: {technology.join(", ") + "."}</span>
					<button onClick={() => window.open({ url }, "_blank")}>
						view website
					</button>
				</div>
			</div>
		</StyledListItem>
	);
};

export default Project;
