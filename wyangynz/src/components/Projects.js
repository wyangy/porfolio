const Article = ({ title, image, description, technology, url }) => {
	return (
		<li className="product-grid-item">
			<h3>{title}</h3>
			<img src={image} alt={title} />
			<p>{description}</p>
			<span>Technology: {technology.join(", ") + "."}</span>
			<button onClick={() => window.open({ url }, "_blank")}>
				view website
			</button>
		</li>
	);
};
