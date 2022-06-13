import Project from "./Project";
import styled from "styled-components";

const StyledList = styled.ul`
	list-style-type: none;
	display: grid;
	row-gap: 5rem;

	/* @media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		column-gap: 3rem;
	} */
`;

const ProjectList = ({ projects }) => {
	return (
		<StyledList className="project-list">
			{projects.map((project, index) => {
				return <Project key={index} project={project} />;
			})}
		</StyledList>
	);
};

export default ProjectList;
