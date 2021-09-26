import React from 'react';
import './DevInfo.css'

const DevInfo = (props) => {
    const { name, img,salary } = props.devInfo;
    return (
        <div>
            <div class="card mb-3 hiredDev">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start thumbnailPhoto" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">{name}</h6>
                            <p class="card-text"><small class="">$ {salary}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevInfo;