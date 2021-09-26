import React from 'react';
import './Header.css';
// import logo from '../../images/logo1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
const logo = <FontAwesomeIcon className="logo" icon={faCode} />

const Header = () => {
    return (
        <>
            <div class="container header">
                <h2 className="text-center m-0 p-0">{logo} Hire Developer</h2>
                <p className="text-center p-0 m-0">Hire developer for your company and increasing your productivity.</p>
                <h4 className="text-center">Total Budgets: <b>100 Million</b></h4>
            </div>
        </>
    );
};
export default Header;