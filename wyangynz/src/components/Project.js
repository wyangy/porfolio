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

		filter: grayscale(100%);
		-webkit-filter: grayscale(100%);
	}

	img:hover,
	:focus {
		filter: none;
		-webkit-filter: grayscale(0);
	}

	p {
		line-height: 1.4;
	}

	span {
		font-style: italic;
	}

	a.button {
		margin: 1.5rem auto 0;
		padding: 1rem;
		width: 13rem;

		font-size: 14px;
		font-weight: 900;
		color: white;
		text-transform: uppercase;
		text-decoration: none;
		text-align: center;
		letter-spacing: 0.1rem;
		word-spacing: 0.2rem;

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
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						title={`link to ${title}`}
					>
						<img src={require(`../images/${image}`)} alt={title} />
					</a>
					<p>{description}</p>
					<span>Technology: {technology.join(", ") + "."}</span>
					<a
						className="button"
						title={`link to ${title}`}
						href={url}
						target="_blank"
						rel="noreferrer"
					>
						view website
					</a>
				</div>
			</div>
		</StyledListItem>
	);
};

export default Project;
