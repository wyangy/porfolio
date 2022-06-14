import styled from "styled-components";

const StyledHeading = styled.div`
	display: grid;
	grid-template-columns: auto min-content min-content max-content min-content min-content auto;
	margin: 0 auto 2.5rem;

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;

		min-width: 13rem;
		padding: 0.7rem 3rem;
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
`;

const Heading = ({ text }) => {
	return (
		<StyledHeading>
			<div className="heading-left-edge" />
			<div className="heading-left-outer" />
			<div className="heading-left-inner" />
			<h2>{text}</h2>
			<div className="heading-right-inner" />
			<div className="heading-right-outer" />
			<div className="heading-right-edge" />
		</StyledHeading>
	);
};

export default Heading;
