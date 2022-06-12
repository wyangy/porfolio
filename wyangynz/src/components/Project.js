import styled from "styled-components";

const StyledListItem = styled.li`
	display: flex;
	flex-direction: column;

	/* border: 1px solid #212121; */
	border-top: 4px solid #212121;
	border-left: 1px solid #212121;
	border-right: 1px solid #212121;
	border-bottom: 4px solid #212121;
	padding: 0 1.5rem 0 1.5rem;

	h3 {
		background: #212121;
		color: white;
		display: flex;
		/* justify-content: center; */
		width: max-content;
		margin: 0 auto 1rem auto;
		padding: 0.4rem 1rem;
	}

	img {
		max-width: 100%;
	}

	span {
		padding-bottom: 1rem;
	}

	button {
		margin-top: auto;
		background: #212121;
		color: white;
	}
`;

const Project = ({ project }) => {
	const { title, image, description, technology, url } = project;

	return (
		<StyledListItem className="project">
			<h3>{title}</h3>
			<img src={require(`../images/${image}`)} alt={title} />

			<p>{description}</p>
			<span>Technology: {technology.join(", ") + "."}</span>
			<button onClick={() => window.open({ url }, "_blank")}>
				view website
			</button>
		</StyledListItem>
	);
};

export default Project;
