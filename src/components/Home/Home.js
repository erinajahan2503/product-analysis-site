import React from 'react';
import './Home.css';
import image from '../../images/plant.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='full-home'>
                <h1 className='head-1'> Plant made life beautiful<br /> <span>Decorate your home with plants</span> </h1>

                <br />
                <p className='paragraph'>
                    The days might be dark, but it's easy to brighten up your home with plants. Group classic plants together, like Pippa, Bertie and Susie, to create a cosy scene. Their different heights and textures will make any corner interesting.<br />

                    Playing with height can make your room feel larger, so fill a nook with a trailing Rapunzel or put a Suri (or three) up high on a mantlepiece.

                    Pots that are light in colour, like our cream dipped pot, grey clay pot and cream ceramic pot will keep things bright. If patterns are more your thing, the unusual waves on our fractured pots are soft and serene.<br />

                    Shop the look below.

                </p>
                <div className='img-container'>
                    <img className='plant-img' src={image} alt=''></img>
                </div>
            </div>
            <div>
                <h2 className='Creview'>Customer Reviews(3)</h2>

            </div>
            <div>
                <button className='btn' onClick={() => navigate('/reviews')} >Sell all review</button>
            </div>
        </div>

    );
};

export default Home;