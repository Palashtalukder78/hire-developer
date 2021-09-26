//It is the right section or Developers section where are developer with their informations.

import React from 'react';
import './Developers.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
const icon = <FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} />

const Developers = (props) => {
    const { name, img, role, country, experience, salary } = props.developer;
    return (
        <div className="col-md-4">
            <div class="card p-2 my-2 developer">
                <div className="text-center">
                    <img src={img} class="card-img-top dev-photo" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">{name}</h5>
                    <p><b>Country:</b> {country}</p>
                    <p><b>Role:</b> {role}</p>
                    <p><b>Experience:</b> {experience}</p>
                    <p><b>Salary:</b> $ {salary}</p>
                    <button onClick={() => props.hireDeveloperHandle(props.developer)} className='hire-btn'>Hire Me {icon}</button>
                </div>
            </div>
        </div>
    );
};

export default Developers;