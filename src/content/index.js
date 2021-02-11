import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';
import NewsData from '../NewsData';

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {

    // Search State
    console.log(process.env.REACT_APP_API_KEY)
    const [search, setSearch] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
    // News State
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        if (search) {
            fetch(search)
            .then(response => response.json())
            .then(jsonData => {
                //console.log(jsonData.articles); we are good to go!
                if (jsonData.articles) {
                    setNewsData(jsonData.articles)
                }
            })
        }
    }, [])

    const [query, setQuery] = useState('')

    useEffect(() => {
        fetch('http://newsapi.org/v2/everything?q=' + query + `&apiKey=` + process.env.REACT_APP_API_KEY)
        .then(response => response.json())
        .then(jsonData => {
            setQuery(jsonData.articles)
        })
    }, [])

    const setSearchTerm = (e) => {
        setQuery(e.target.value)
    }

    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Route exact path="/" render={() => <Landing setQuery={setQuery} query={query} setSearchTerm={setSearchTerm}/>} />
                <Route path="/results" render={() => <Display news={newsData}/>} />
            </div>
        </Router>
    )
};