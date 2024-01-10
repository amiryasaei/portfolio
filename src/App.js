import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import bgImage from './assets/images/bgImage.jpg';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Route>
    </Routes>

    <img className="video-background" src={bgImage} alt='bg'/>
    </>
  )
}

export default App;
