import styled from "styled-components";

const StyledListItem = styled.li`
	img {
		max-width: 100%;
	}

	display: flex;
	flex-direction: column;

	button {
		margin-top: auto;
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
