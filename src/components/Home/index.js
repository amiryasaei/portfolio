import './index.scss';
import Picture from '../../assets/images/myPic.jpg';
import { useIsMobile } from '../../utils/isMobile';
const Home = () => {
  const {isMobile} = useIsMobile();

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
        </div>
      </>
      }
   </div>
  )
}

export default Home