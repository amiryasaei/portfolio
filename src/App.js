import Layout from './components/Layout'
import Home from './components/Home'
//import Projects from './components/projects'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          {/* <Route path='projects' element={<Projects />}></Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App;
