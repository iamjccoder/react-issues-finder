import React from 'react';

const IssuesList = ({filteredIssues}) => {
    console.log(filteredIssues);
    return (
    <ul id="issue-list" class="list-group list-group-numbered">
        {filteredIssues.map(issue => (
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    {issue.title}
                </div>
                <a href={issue.html_url} target="_blank" rel="noreferrer">View issue</a>
            </li>
        ))}
    </ul>
    );
}

export default IssuesList;