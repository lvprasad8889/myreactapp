import React from 'react';
import './card.css';


function card(props){
    const classes='Card '+props.className;
    return(
        
        <div className={classes}>{props.children}</div>
    )
}
export default card; 