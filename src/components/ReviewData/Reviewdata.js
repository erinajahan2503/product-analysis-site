import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Reviewdata.css'
const Reviewdata = (props) => {
    const { img, name, description, ratings } = props.data;
    return (

        <div className='review-bar'>

            <div className='review'>
                <img src={img} alt="" />
                <div className='review-details'>
                    <p className='reviewer-name'>{name}</p>
                    <p>Description:{description}</p>
                    <p><small>Ratings:{ratings}<FontAwesomeIcon icon={faStar}></FontAwesomeIcon></small></p>
                </div>
                <button className='review-btn'>
                    <p>View More</p>

                </button>
            </div>
        </div>
    );
};

export default Reviewdata;