import Project from "./Project";
import styled from "styled-components";

const StyledList = styled.ul`
	list-style-type: none;
	display: grid;
	grid-gap: 5rem;
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
