import styled from "styled-components";
import { useState } from "react";
import projectsJSON from "./data/projects.json";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const StyledApp = styled.div`
	main {
		margin: 0 auto;
		padding: 1rem 1rem 2rem;
		max-width: 75rem;

		@media (min-width: 600px) {
			padding: 1rem 2rem 2rem;
		}

		@media (min-width: 1024px) {
			padding: 1rem 3rem 2rem;
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
			<Footer />
		</StyledApp>
	);
}

export default App;
