import React from 'react';
import DevInfo from '../DevInfo/DevInfo';
import './Hired.css'

const Hired = (props) => {
    console.log(props);

    const { hireDeveloper } = props;

    let total = 0;
    let devInfo = [];
    for (const developer of hireDeveloper) {
        total = total + developer.salary;
        devInfo.push(developer);
    }

    return (
        <div className="hired-dev mt-2">
            <h3 className="text-center text-light">Salary:$ {total}</h3>
            <div>
                {
                    devInfo.map(developer => <DevInfo
                        devInfo={developer}
                    ></DevInfo>)
                }
            </div>
        </div>
    );
};

export default Hired;