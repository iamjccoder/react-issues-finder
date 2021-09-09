import React from 'react';

const IssuesList = ({filteredIssues}) => {
    console.log(filteredIssues);
    return (
    <ul>
        {filteredIssues.map(issue => (
            <li>
                {issue.title}
                <br />
                <a href={issue.html_url} target="_blank" rel="noreferrer">View issue</a>
            </li>
        ))}
    </ul>
    );
}

export default IssuesList;