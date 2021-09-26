//It is the Header section where are Site Name,about site and total Budgets.

import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
const logo = <FontAwesomeIcon className="logo" icon={faCode} />

const Header = () => {
    return (
        <>
            <div className="container header">
                <h1 className="text-center m-0 p-0">{logo} Hire Developer</h1>
                <p className="text-center p-0 m-0">Hire developer for your company and increasing your productivity.</p>
                <h4 className="text-center">Total Budgets: <b>100 Million</b></h4>
            </div>
        </>
    );
};
export default Header;