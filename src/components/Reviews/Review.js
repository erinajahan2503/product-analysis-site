import React, { useEffect, useState } from 'react';
import Reviewdata from '../ReviewData/Reviewdata';
import './Review.css'
const Review = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    return (
        <div className='review-section'>
            <h1 className='see-all'>See All Review(6)</h1>
            <div className='start-review'>

                {

                    data.map(data => <Reviewdata
                        key={data.id}
                        data={data}>
                    </Reviewdata>)
                }
            </div>
        </div>
    );
};

export default Review;