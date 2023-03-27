import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './searchbox.css';

const SearchBox = ({ searchObjects, onSearch, searchType }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchSubmitted, setSearchSubmitted] = useState(false);

    
    useEffect(() => {
        if (searchObjects) {
            // Perform search when search query changes
            const results = searchObjects.filter((searchObject) =>
                searchObject[searchType].toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        }
    }, [searchQuery, searchObjects, searchType]);

    const handleListItemClick = (event) => {
        setSearchQuery(event.target.textContent);
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        const searchResult = {
            searchQuery,
            searchResults: [],
            searchSubmitted
        };
        onSearch(searchResult);
        setSearchSubmitted(false); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const results = searchObjects.filter((searchObject) =>
            searchObject[searchType].toLowerCase().includes(searchQuery.toLowerCase())
        );
        const searchResult = {
            searchQuery,
            searchResults: results,
            searchSubmitted
        };
        onSearch(searchResult);
        setSearchSubmitted(true);
    };

    return (
        <form className="search-box mb-3" onSubmit={handleSubmit}>
            <div className="search-area">
                <input
                    type="text"
                    placeholder={`Search ${searchType}...`}
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            {!searchSubmitted && searchQuery && searchResults.length > 0 && (
                <ul className="search-results">
                    {searchResults.map((result) => {
                        return (
                            <li key={result.id} onClick={handleListItemClick}>
                                {result[searchType]}
                            </li>
                        );
                    })}
                </ul>
            )}

        </form>
    );
};

export default SearchBox;
