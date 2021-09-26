// It is the main page where i added few component for render 
import React, { useEffect, useState } from 'react';
import Developers from '../Developers/Developers';
import Hired from '../Hired/Hired';

const Main = () => {
    const [developers, setDevelopers] = useState([]);
    const [hireDeveloper,setHireDeveloper] = useState([]);
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, []);
    const hireDeveloperHandle = developer =>{
        const hired = [...hireDeveloper, developer];
        setHireDeveloper(hired);
    }
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-md-9">
                    <div className="row">
                        {
                            developers.map(developer => <Developers
                                key={developer.key}
                                developer={developer}
                                hireDeveloperHandle= {hireDeveloperHandle}
                            ></Developers>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Hired hireDeveloper={hireDeveloper}></Hired>
                </div>
            </div>
        </div>
    );
};

export default Main;