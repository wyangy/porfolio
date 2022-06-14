import styled from "styled-components";

const StyledHeaderDesign = styled.div`
	.border1 {
		background: snow;
		clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 81% 100%, 19% 100%, 0% 60%);
	}

	.border2 {
		background: #212121;
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 60.7%,
			81.1% 100%,
			18.9% 100%,
			0% 60.7%
		);
	}

	.border3 {
		background: snow;
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
		background: #212121;
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 65.5%,
			82% 100%,
			18% 100%,
			0% 65.5%
		);
	}

	.border5 {
		background: snow;
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 68%,
			82.7% 100%,
			17.3% 100%,
			0% 68%
		);
	}
`;

const HeaderDesign = ({ children }) => {
	return (
		<StyledHeaderDesign>
			<div className="border5">
				<div className="border4">
					<div className="border3">
						<div className="border2">
							<div className="border1">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</StyledHeaderDesign>
	);
};

export default HeaderDesign;
