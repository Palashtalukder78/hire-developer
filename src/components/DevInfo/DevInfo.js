//it is right side bottom section where Selected developer Added when the client hired.

import React from 'react';
import './DevInfo.css'

const DevInfo = (props) => {
    const { name, img,salary } = props.devInfo;
    return (
        <div>
            <div className="card mb-3 hiredDev">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start thumbnailPhoto" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="card-title">{name}</h6>
                            <p className="card-text"><small>$ {salary}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevInfo;