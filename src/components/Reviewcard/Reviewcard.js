import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Reviewcard.css'
const reviewCard = (review, handleAddToreview) => {
    const { name, ratings, description } = review;

    return (
        <div className='review'>
            <div className='review-section'>
                <p>{name}</p>
                <p >Ratings:{ratings}stars</p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <p>Description:{description}</p>
            </div>
            <button onClick={() => handleAddToreview(review)} className='btn-cart'>
                <p className='btn-text'>More Details</p>

            </button>
        </div >
    );
};

export default reviewCard;