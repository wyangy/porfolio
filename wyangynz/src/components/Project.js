import styled from "styled-components";

const StyledListItem = styled.li`
	background: linear-gradient(150deg, #212121 15px, snow 0) top left,
		linear-gradient(-150deg, #212121 15px, snow 0) top right,
		linear-gradient(-30deg, #212121 15px, snow 0) bottom right,
		linear-gradient(30deg, #212121 15px, snow 0) bottom left;
	background-size: 60% 60%;
	background-repeat: no-repeat;

	display: flex;
	justify-content: center;

	.border {
		border-top: 2px solid #212121;
		border-bottom: 2px solid #212121;
		width: 80%;
		margin: 1rem 1rem 2rem;
		padding-bottom: 1rem;
	}

	.content {
		max-width: 35rem;
		width: 100%;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		font-size: 18px;
	}

	.heading {
		display: grid;
		grid-template-columns: auto min-content min-content max-content min-content min-content auto;
		margin: 0 auto 2.5rem;
	}

	h3 {
		display: flex;
		justify-content: center;
		align-items: center;

		min-width: 13rem;
		padding: 0.7rem 3rem 0.7rem;
		border-left: 2px solid snow;
		border-right: 2px solid snow;

		background: #212121;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.3rem;
		word-spacing: 0.3rem;
		font-size: 24px;
		font-weight: 400;
	}

	.heading-left-inner {
		background: #212121;
		height: 2.3rem;
		width: 0.5em;
		justify-self: right;
		border-left: 2px solid snow;
	}

	.heading-left-outer {
		background: #212121;
		height: 1.4rem;
		width: 0.4rem;
		justify-self: right;
		border-left: 2px solid snow;
	}

	.heading-left-edge {
		background: #212121;
		height: 0.6rem;
		width: 0.2rem;
		justify-self: right;
	}

	.heading-right-inner {
		background: #212121;
		height: 2.3rem;
		width: 0.5em;
		border-right: 2px solid snow;
	}

	.heading-right-outer {
		background: #212121;
		height: 1.4rem;
		width: 0.4rem;
		border-right: 2px solid snow;
	}

	.heading-right-edge {
		background: #212121;
		height: 0.6rem;
		width: 0.2rem;
	}

	img {
		max-width: 40rem;
		width: 100%;
		margin-bottom: 1rem;
		border-radius: 0.5rem;
	}

	p {
		line-height: 1.4;
	}

	span {
		font-style: italic;
	}

	button {
		margin: 1.5rem auto 0;
		padding: 1rem;
		width: 15rem;
		color: white;
		text-transform: uppercase;
		font-weight: 900;
		letter-spacing: 0.15rem;
		word-spacing: 0.2rem;

		border-style: none;
		background: linear-gradient(135deg, snow 7px, #212121 0) top left,
			linear-gradient(-135deg, snow 7px, #212121 0) top right,
			linear-gradient(-45deg, snow 7px, #212121 0) bottom right,
			linear-gradient(45deg, snow 7px, #212121 0) bottom left;
		background-size: 60% 60%;
		background-repeat: no-repeat;
	}
`;

const Project = ({ project }) => {
	const { title, image, description, technology, url } = project;

	return (
		<StyledListItem>
			<div className="border">
				<div className="heading">
					<div className="heading-left-edge" />
					<div className="heading-left-outer" />
					<div className="heading-left-inner" />
					<h3>{title}</h3>
					<div className="heading-right-inner" />
					<div className="heading-right-outer" />
					<div className="heading-right-edge" />
				</div>
				<div className="content">
					<img src={require(`../images/${image}`)} alt={title} />

					<p>{description}</p>
					<span>Technology: {technology.join(", ") + "."}</span>
					<button onClick={() => window.open({ url }, "_blank")}>
						view website
					</button>
				</div>
			</div>
		</StyledListItem>
	);
};

export default Project;
