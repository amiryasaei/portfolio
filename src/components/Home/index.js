import { useState } from 'react';
import AnimmatedLetters from '../AnimatedLetters';
import './index.scss';
import {Link} from 'react-router-dom'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A', 'm', 'i', 'r', 'Y', 'a', 's', 'a', 'e', 'i']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi there, <br /> 
                <AnimmatedLetters letterClass={letterClass}
                strAArray={nameArray}
                index={15} />
                </h1>
                <br />
                <h2>I'm an engneering student at UWaterloo <br/> and this is my first WebApp.</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home