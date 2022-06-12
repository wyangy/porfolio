import styled from "styled-components";

const StyledListItem = styled.li`
	border: 1px solid white;

	.project {
		height: 100%;
		background: #212121;
		background: whitesmoke;

		background-size: 70% 70%;
		/* background-image: radial-gradient(
				circle at 100% 100%,
				transparent 0,
				transparent 12px,
				white 13px
			),
			radial-gradient(
				circle at 0 0,
				transparent 0,
				transparent 12px,
				white 13px
			),
			radial-gradient(
				circle at 100% 0,
				transparent 0,
				transparent 12px,
				white 13px
			),
			radial-gradient(
				circle at 0 100%,
				transparent 0,
				transparent 12px,
				white 13px
			); */
		/* background-image: radial-gradient(
				circle at 100% 100%,
				transparent 0,
				transparent 12px,
				whitesmoke 13px
			),
			radial-gradient(
				circle at 0 0,
				transparent 0,
				transparent 12px,
				whitesmoke 13px
			),
			radial-gradient(
				circle at 100% 0,
				transparent 0,
				transparent 12px,
				whitesmoke 13px
			),
			radial-gradient(
				circle at 0 100%,
				transparent 0,
				transparent 12px,
				whitesmoke 13px
			);
		background-repeat: no-repeat;
		background-position: right bottom, left top, right top, left bottom; */

		/* background: linear-gradient(135deg, #212121 10px, white 0) top left,
		linear-gradient(-135deg, #212121 10px, white 0) top right,
		linear-gradient(-45deg, #212121 10px, white 0) bottom right,
		linear-gradient(45deg, #212121 10px, white 0) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat; */

		display: flex;
		flex-direction: column;
		gap: 1rem;

		border-top: 12px solid #212121;
		border-bottom: 8px solid #212121;
		border-left: 2px solid #212121;
		border-right: 2px solid #212121;

		padding: 0 1.5rem 0 1.5rem;
	}

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

		padding: 0.8rem 0.7rem 0.8rem;
		border-left: 1px solid white;
		border-right: 1px solid white;

		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: 400;
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
		margin-bottom: 0.5rem;
	}

	button {
		/* margin-top: auto; */
		margin: auto auto 0;
		/* margin-bottom: 1rem; */
		background: #212121;
		color: white;
		text-transform: uppercase;
		font-weight: 900;
		letter-spacing: 0.1rem;

		padding: 0.8rem 1.5rem 0.2rem;
		border-style: none;
		/* border-left: 8px double white; */
		/* border-right: 8px double white; */
	}
`;

const Project = ({ project }) => {
	const { title, image, description, technology, url } = project;

	return (
		<StyledListItem>
			<div className="project">
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
			</div>
		</StyledListItem>
	);
};

export default Project;
