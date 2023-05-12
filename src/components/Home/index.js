import './index.scss';
import Picture from '../../assets/images/myPic.png';
//import Background from '../../assets/images/background.jpg';
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className="container home-page">
            <img src={Picture} className='my-image' alt='photo' />
            <div className="text-zone">
                <h1>Hello there, <br /> Amir Yasaei's here.</h1>
                <h2> I'm a software developer and a student at University of Waterloo. <br/>
                     You can read more about me&nbsp;
                     <Link to='/about' className='about-me'>here</Link>. 
                </h2>
                <h2>
                    I will be posting the apps that I develope in my free time&nbsp;
                    <Link to='/projects' className='about-me'>here</Link>.  
                </h2>
                <h2>I appreciate your feedbacks on my projects or any words from you.<br/>
                    Please contact me if you think we can make some money together ;)
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home