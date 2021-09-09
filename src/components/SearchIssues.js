import React from 'react';

const SearchIssues = ({reactIssues, updateFilteredIssues}) => {
    const findIssues = (searchedValue) => {
        if (!searchedValue) {
            updateFilteredIssues(reactIssues);
        }
        let regex = new RegExp(searchedValue);
        const filteredIssues = reactIssues.filter((issue) => regex.test(issue.title));
        updateFilteredIssues(filteredIssues);
    };

    return (
        <form>
            <input type="text" onChange={ (event) => findIssues(event.target.value) } />
        </form>
    );
}

export default SearchIssues;