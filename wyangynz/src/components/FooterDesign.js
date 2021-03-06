import styled from "styled-components";

const StyledFooterDesign = styled.div`
	.border1 {
		background: snow;
		clip-path: polygon(100% 100%, 0% 100%, 0% 40%, 19% 0%, 81% 0%, 100% 40%);
	}

	.border2 {
		background: #212121;
		clip-path: polygon(
			100% 100%,
			0% 100%,
			0% 39.3%,
			18.9% 0%,
			81.1% 0%,
			100% 39.3%
		);
	}

	.border3 {
		background: snow;
		clip-path: polygon(
			100% 100%,
			0% 100%,
			0% 35.1%,
			18.1% 0%,
			81.9% 0%,
			100% 35.1%
		);
	}

	.border4 {
		background: #212121;
		clip-path: polygon(
			100% 100%,
			0% 100%,
			0% 34.5%,
			18% 0%,
			82% 0%,
			100% 34.5%
		);
	}

	.border5 {
		background: snow;
		clip-path: polygon(
			100% 100%,
			0% 100%,
			0% 32%,
			17.3% 0%,
			82.7% 0%,
			100% 32%
		);
	}
`;

const FooterDesign = ({ children }) => {
	return (
		<StyledFooterDesign>
			<div className="border5">
				<div className="border4">
					<div className="border3">
						<div className="border2">
							<div className="border1">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</StyledFooterDesign>
	);
};

export default FooterDesign;
