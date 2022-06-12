import styled from "styled-components";
import { useState } from "react";
import projectsJSON from "./data/projects.json";
import ProjectList from "./components/ProjectList";

const StyledApp = styled.div`
	main {
		max-width: 80rem;
		margin: 0 auto;
		padding: 1rem 1rem 2rem;
	}
`;

function App() {
	const [projects] = useState(projectsJSON);

	return (
		<StyledApp>
			<header className="App-header">
				<main>
					<ProjectList projects={projects} />
				</main>
			</header>
		</StyledApp>
	);
}

export default App;
