import React from 'react';
import {Link} from 'react-router-dom';
//styles
import {Navigation} from '../AppStyles';

export default function Navbar() {
    return (
        <Navigation>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/countries">Countries</Link>
                </li>
                <li>
                    <a href="https://github.com/lumungep12/">Source</a>
                </li>
            </ul>
        </Navigation>
    )
}
