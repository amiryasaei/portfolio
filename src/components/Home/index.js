import './index.scss';
import Picture from '../../assets/images/myPic.jpg';
import { useIsMobile } from '../../utils/isMobile';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
  const {isMobile} = useIsMobile();

  const [joke, setJoke] = useState('');

  useEffect(() => {
    const lastApiCallTimestamp = localStorage.getItem('lastApiCallTimestamp');
    const currentTimestamp = new Date().getTime();
    const twentyFourHoursInMs = 24 * 60 * 60 * 1000;

    if (
      !lastApiCallTimestamp ||
      currentTimestamp - lastApiCallTimestamp > twentyFourHoursInMs
    ) {
      fetchJoke(currentTimestamp);
    } else {
      const cachedJoke = localStorage.getItem('cachedJoke');
      setJoke(cachedJoke);
    }
  }, []);

  const fetchJoke = async (currentTimestamp) => {
    try {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'text/plain',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const jokeText = await response.data();
      setJoke(jokeText);
      localStorage.setItem('cachedJoke', jokeText);
      localStorage.setItem('lastApiCallTimestamp', currentTimestamp);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="homePage">
      {!isMobile?
      <>
        <div className='headerBlock'>
          <img src={Picture} className='myImage' alt='myphoto' />
          <div className='textWrapper'>
            <div className='title'>
                <h1>Hello there, welcome to my website!</h1>
            </div>
            <div className='Intro'>
              I am a software developer, and my goal is to showcase the personal projects that
              I develop over time on this website, creating lasting memories out of them. :)
            </div>
          </div>
        </div>
        <div className='footerBlock'>
          <div className='footerTitle'>
            Dad joke of the day...
          </div>
          <div className='footerContext'>
            {joke}
          </div>
        </div>
      </>
      :
      <>
        <div className='headerBlock'>
          <img src={Picture} className='myImage' alt='myphoto' />
          <div className='textWrapper'>
            <div className='title'>
                <h1>Hello there, welcome to my website!</h1>
            </div>
            <div className='context'>
              I am a software developer, and my goal is to showcase the personal projects that
              I develop over time on this website, creating lasting memories out of them. :)
            </div>
          </div>
        </div>
        <div className='footerBlock'>
          <div className='footerTitle'>
            Dad joke of the day...
          </div>
          <div className='footerContext'>
            {joke}
          </div>
        </div>
      </>
      }
   </div>
  )
}

export default Home