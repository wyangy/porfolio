import styled from "styled-components";

const StyledListItem = styled.li`
	background: linear-gradient(150deg, #212121 15px, snow 0) top left,
		linear-gradient(-150deg, #212121 15px, snow 0) top right,
		linear-gradient(-30deg, #212121 15px, snow 0) bottom right,
		linear-gradient(30deg, #212121 15px, snow 0) bottom left;
	background-size: 50% 50%;
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
		background: antiquewhite;
		background: oldlace;
		background: aliceblue;
		background: azure;
		background: blanchedalmond;
		background: snow;
		background: ghostwhite;
		background: gainsboro;
		background: wheat;
		background: snow;
		max-width: 35rem;
		width: 100%;
		margin: 0 auto;

		display: flex;
		flex-direction: column;

		justify-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.heading {
		display: grid;
		grid-template-columns: auto min-content max-content min-content auto;
		/* border-top: 2px solid #212121;
		width: 80%; */
		margin: 0 auto 2rem;
		/* margin: 1rem 3rem 2rem; */
		/* margin-bottom: 2rem; */
	}

	h3 {
		background: #212121;
		color: white;
		display: flex;
		/* min-width: 20rem; */
		width: max-content;

		padding: 0.8rem 3rem 0.8rem;
		border-left: 2px solid snow;
		border-right: 2px solid snow;

		text-transform: uppercase;
		/* text-align: center; */
		letter-spacing: 0.1rem;
		font-weight: 400;
	}

	.left-design-inner {
		background: #212121;
		height: 2rem;
		width: 0.5em;
		justify-self: right;
		border-left: 1px solid snow;
	}

	.left-design-outer {
		background: #212121;
		height: 1rem;
		width: 0.3rem;
		justify-self: right;
	}

	.right-design-inner {
		background: #212121;
		height: 2rem;
		width: 0.5em;
		border-right: 1px solid snow;
	}

	.right-design-outer {
		background: #212121;
		height: 1rem;
		width: 0.3rem;
	}

	img {
		max-width: 40rem;
		width: 100%;
		/* margin: 0 auto;
		display: block;
		padding: 0 1rem; */
	}

	p {
		/* margin-bottom: 1.5rem; */
		/* padding: 0 3rem; */
	}

	span {
		/* width: 100%; */
		/* margin-bottom: 0.5rem; */
		/* padding: 0 3rem; */
	}

	button {
		/* margin-top: auto; */
		margin: 2rem auto 0;
		/* margin-bottom: 1rem; */
		background: #212121;
		color: white;
		text-transform: uppercase;
		font-weight: 900;
		letter-spacing: 0.1rem;
		padding: 1rem 3rem;

		/* padding: 0.8rem 1.5rem 0.2rem; */
		border-style: none;
		/* border-left: 8px double white; */
		/* border-right: 8px double white; */
		background: linear-gradient(135deg, snow 7px, #212121 0) top left,
			linear-gradient(-135deg, snow 7px, #212121 0) top right,
			linear-gradient(-45deg, snow 7px, #212121 0) bottom right,
			linear-gradient(45deg, snow 7px, #212121 0) bottom left;
		background-size: 50% 50%;
		background-repeat: no-repeat;
	}
`;

const Project = ({ project }) => {
	const { title, image, description, technology, url } = project;

	return (
		<StyledListItem>
			<div className="border">
				<div className="heading">
					<div className="left-design-outer"></div>
					<div className="left-design-inner"></div>
					<h3>{title}</h3>
					<div className="right-design-inner"></div>
					<div className="right-design-outer"></div>
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
