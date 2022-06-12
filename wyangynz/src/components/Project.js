import styled from "styled-components";

const StyledListItem = styled.li`
	background: white;
	/* background: hotpink; */
	display: flex;
	flex-direction: column;
	gap: 1rem;

	/* border: 1px solid #212121; */
	/* border-top: 10px double #212121; */
	/* border-left: 5px double #212121;
	border-right: 5px double #212121; */
	border-top: 10px solid #212121;
	border-bottom: 6px solid #212121;
	border-left: 1px solid #212121;
	border-right: 1px solid #212121;

	padding: 0 1.5rem 0 1.5rem;

	.heading {
		display: grid;
		grid-template-columns: auto min-content max-content min-content auto;
		margin-bottom: 0.5rem;
	}

	h3 {
		background: #212121;
		color: white;
		display: flex;
		width: max-content;

		padding: 1rem 1.5rem 0.8rem;
		border-left: 1px solid white;
		border-right: 1px solid white;
	}

	.left-design-inner {
		background: #212121;
		height: 2rem;
		width: 0.5em;
		justify-self: right;
		border-left: 1px solid white;
	}

	.left-design-outer {
		background: #212121;
		height: 0.8rem;
		width: 0.3rem;
		justify-self: right;
	}

	.right-design-inner {
		background: #212121;
		height: 2rem;
		width: 0.5em;
		border-right: 1px solid white;
	}

	.right-design-outer {
		background: #212121;
		height: 0.8rem;
		width: 0.3rem;
	}

	img {
		max-width: 100%;
	}

	p {
		/* margin-bottom: 1.5rem; */
	}

	span {
		margin-bottom: 1.5rem;
	}

	button {
		/* margin-top: auto; */
		margin: auto auto 0;
		background: #212121;
		color: white;
		text-transform: uppercase;
		font-weight: 900;
		letter-spacing: 0.1rem;

		padding: 0.8rem 1.5rem 0.2rem;
	}
`;

const Project = ({ project }) => {
	const { title, image, description, technology, url } = project;

	return (
		<StyledListItem className="project">
			<div className="heading">
				<div className="left-design-outer"></div>
				<div className="left-design-inner"></div>
				<h3>{title}</h3>
				<div className="right-design-inner"></div>
				<div className="right-design-outer"></div>
			</div>
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
