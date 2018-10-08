import React from 'react';
import { Link } from 'gatsby'


const Navigation = () => {
    return ( 
        <ul>
            <Link to="/"><li>home</li></Link>
            <Link to="/people"><li>people</li></Link>
        </ul>
    )
}

 
export default Navigation;