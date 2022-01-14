import React from 'react';
import './widgets.css';
import {FiberManualRecord, Info} from "@mui/icons-material";

function Widgets(props) {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkdIn News</h2>
                <Info/>
            </div>
            {newsArticle("JS React", "Top News - 981 readers")}
            {newsArticle("MSC Lirica", "Top News - 789 readers")}
            {newsArticle("Costa", "Top News - 765 readers")}
            {newsArticle("Royal Carribean", "Top News - 546 readers")}
            {newsArticle("Astoria Grande", "Top News - 354 readers")}
        </div>
    );
}

export default Widgets;