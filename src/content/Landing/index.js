import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const Landing = props => {
    return (
        <div className="land-page">
            <h2>Top News in the U.S.</h2>
            <h4>Don't be left out! Click and find the top stories people are talking about!</h4>
            <Link className="newsbtn-container" to="/results">
                <button className="news-btn">Click for the Top Stores!</button>
            </Link>
            <div>
                <SearchBar searchUsArticle={props.searchUsArticle} searchQuery={props.searchQuery} query={props.query} setSearchTerm={props.setSearchTerm}/>
            </div>
        </div>
    )
};