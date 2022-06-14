import styled from "styled-components";
import { useState } from "react";
import projectsJSON from "./data/projects.json";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";

const StyledApp = styled.div`
	main {
		margin: 0 auto;
		padding: 1rem 1rem 2rem;

		@media (min-width: 600px) {
			padding: 1rem 2rem 2rem;
		}

		@media (min-width: 1024px) {
			max-width: 1024px;
		}
	}
`;

function App() {
	const [projects] = useState(projectsJSON);

	return (
		<StyledApp>
			<Header />
			<main>
				<ProjectList projects={projects} />
			</main>
		</StyledApp>
	);
}

export default App;
