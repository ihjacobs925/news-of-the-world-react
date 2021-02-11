import React from 'react';

export const Display = props => {

    if (props.news.length < 1) {
        return (<h4>Your news is loading</h4>)
    } else {
        let content = props.news.map((article, i) => {
            return (
                <li key={`article-${i}`}>
                    {article.title}
                     
                    {article.author}
                </li>
            )})
        
    

    return (
        <div>
            <h2 className="top-stories">Top Stories in the US!</h2>
            <ul className="articles">
                {content}
            </ul>
        </div>
    )
  }

};