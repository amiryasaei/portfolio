import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import videoBg from './assets/video/videoBg.mp4';

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
    <video className="video-background" src='videoBg' autoPlay muted loop/>
    </>
  )
}

export default App;
