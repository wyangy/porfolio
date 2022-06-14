import styled from "styled-components";

const StyledHeader = styled.header`
	/* background: snow; */

	/* -webkit-clip-path: polygon(5% 5%, 95% 5%, 100% 50%, 95% 95%, 5% 95%, 0% 50%); */
	.border1 {
		background: snow;
		/* clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 95% 95%, 5% 95%, 0% 50%); */
		/* clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 81% 100%, 19% 100%, 0% 60%); */
		clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 81% 100%, 19% 100%, 0% 60%);
	}

	.border2 {
		background: #212121;
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 60.8%,
			81.2% 100%,
			18.8% 100%,
			0% 60.8%
		);
	}

	.border3 {
		background: snow;
		/* background: magenta; */
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 64.9%,
			81.9% 100%,
			18.1% 100%,
			0% 64.9%
		);
	}

	.border4 {
		/* background: snow; */
		background: #212121;
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 65.7%,
			82.1% 100%,
			17.9% 100%,
			0% 65.7%
		);
	}

	.border5 {
		background: snow;
		/* background: magenta; */
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 68%,
			82.7% 100%,
			17.3% 100%,
			0% 68%
		);
	}

	/* background: linear-gradient(-30deg, #212121 140px, snow 0) bottom right,
		linear-gradient(30deg, #212121 140px, snow 0) bottom left;
	background-size: 60% 100%;
	background-repeat: no-repeat; */

	/* background: linear-gradient(
			-30deg,
			snow calc(10% - 3px),
			#212121 10%,
			snow calc(10% + 3px),
			snow 3px
		)
		bottom right; */

	/* background: linear-gradient(
		to bottom right,
		snow 0%,
		snow calc(50% - 1px),
		#212121 50%,
		snow calc(50% + 1px),
		snow 100%
	); */

	/* background-size: 60% 100%; */
	/* background-repeat: no-repeat; */

	/* border-top: 50px solid #555;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	height: 100%;
	width: 100%; */

	.content {
		padding: 10rem;
		margin-bottom: 8rem;

		display: grid;
		justify-items: center;
	}

	h1 {
		/* text-align: center; */
		text-transform: uppercase;
		font-size: 150px;
		font-weight: 200;
		letter-spacing: 0.5rem;
	}

	p {
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<div className="border5">
				<div className="border4">
					<div className="border3">
						<div className="border2">
							<div className="border1">
								<div className="content">
									<h1>Wendy Yang</h1>
									<p>Full-stack web developer</p>
									<div className="icons"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;
