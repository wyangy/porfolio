// const Project = ({ title, image, description, technology, url }) => {
const Project = ({ project }) => {
	const { title, image, description, technology, url } = project;

	console.log(image);
	return (
		<li className="project">
			<h3>{title}</h3>
			<img src={"images/" + image} alt={title} />
			<p>{description}</p>
			<span>Technology: {technology.join(", ") + "."}</span>
			<button onClick={() => window.open({ url }, "_blank")}>
				view website
			</button>
		</li>
	);
};

export default Project;
