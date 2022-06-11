import Project from "./Project";

const ProjectList = ({ projects }) => {
	return (
		<ul className="project-list">
			{projects.map((project, index) => {
				return <Project key={index} project={project} />;
			})}
		</ul>
	);
};
