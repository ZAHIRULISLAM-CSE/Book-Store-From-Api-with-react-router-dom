import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleInfo = () => {
    const singleData=useLoaderData();
    console.log(singleData);
    return (
        <div>
            <h1>okkk</h1>
        </div>
    );
};

export default SingleInfo;