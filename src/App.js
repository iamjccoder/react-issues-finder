import './App.css';
import { useEffect, useState } from 'react';
import SearchIssues from './components/SearchIssues';
import IssuesList from './components/IssuesList';

function App() {
  const searchIssuesEndpoint = 'https://api.github.com/repos/facebook/react/issues';

  const [reactIssues, updateIssues] = useState([]);
  const [filteredIssues, updateFilteredIssues] = useState([]);

  const getReactIssues = () => {
    fetch(searchIssuesEndpoint)
    .then(response => response.json())
    .then(issues => {
      updateIssues(issues);
      updateFilteredIssues(issues);
    })
    .catch(error => console.error(error));
  };

  useEffect(() => {
    getReactIssues();
  }, []);

  return (
    <div className="App">
      <SearchIssues reactIssues={reactIssues} updateFilteredIssues={updateFilteredIssues} />
      <IssuesList filteredIssues={filteredIssues} />
    </div>
  );
}

export default App;
