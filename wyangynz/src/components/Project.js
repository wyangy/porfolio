// const Project = ({ title, image, description, technology, url }) => {
const Project = ({ project }) => {
	const { title, image, description, technology, url } = project;

	console.log(image);
	// <img src={require("/images/image.jpg")} />;
	// 	You're almost correct, just misplaced a few quotes. Wrapping the whole thing in regular quotes will literally give you the string #demo + {this.state.id} - you need to indicate which are variables and which are string literals. Since anything inside {} is an inline JSX expression, you can do:

	// href={"#demo" + this.state.id}
	return (
		<li className="project">
			<h3>{title}</h3>
			{/* <img src={"images/" + image} alt={title} /> */}
			<img src={require(`../images/${image}`)} alt={title} />
			{/* <img src={require({ "/images/" + image })} /> */}
			{/* <img src={require(image)} alt={title} /> */}
			<p>{description}</p>
			<span>Technology: {technology.join(", ") + "."}</span>
			<button onClick={() => window.open({ url }, "_blank")}>
				view website
			</button>
		</li>
	);
};

export default Project;
