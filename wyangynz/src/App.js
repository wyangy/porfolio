// import logo from './logo.svg';
// import "./App.css";
import { useState } from "react";
import projectsJSON from "./data/projects.json";
import ProjectList from "./components/ProjectList";

function App() {
	const [projects] = useState(projectsJSON);

	return (
		<div className="App">
			<header className="App-header">
				<ProjectList projects={projects} />
				{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
			</header>
		</div>
	);
}

export default App;
