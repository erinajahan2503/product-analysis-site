import React from 'react';
import './Home.css';
import image from '../../images/plant.jpg'

const Home = () => {
    return (
        <div className='full-home'>
            <div className='img-container'>
                <img className='plant-img' src={image} alt=''></img>
                <div>
                    <h1>Plants made easy</h1>
                    <br />
                    <p className='paragraph'>
                        The days might be dark, but it's easy to brighten up your home with plants.Group classic plants together, like Pippa, Bertie and Susie, to create a cosy scene.Their different heights and textures will make any corner interesting.

                    </p>
                </div>
            </div>



        </div>
    );
};

export default Home;