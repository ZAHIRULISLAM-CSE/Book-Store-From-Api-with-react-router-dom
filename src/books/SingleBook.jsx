import React from 'react';

const SingleBook = (props) => {
     console.log(props.data);
     const {image}=props.data;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default SingleBook;