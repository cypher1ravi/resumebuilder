
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import Navbar from './components/Nvbar';
import Details from './components/Details';
import Home from './components/Home';
import Preview from './components/Preview';
import About from './components/About';
import PersonalDetails from './components/details/PersonalDetails';
import Education from './components/details/Education';
import WorkDetails from './components/details/WorkDetails';
import SkillsDetails from './components/details/SkillsDetails';


function App() {
  return (
    <>
      <Navbar />

      <Container>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='details' element={<Details />} >
            <Route index element={<PersonalDetails />} />
            <Route path='workExperience' element={<WorkDetails />} />
            <Route path='education' element={<Education />} />
            <Route path='keySkills' element={<SkillsDetails />} />
          </Route>
          <Route path='preview' element={<Preview />} />
          <Route path='about' element={<About />} />


        </Routes >

      </Container>
    </>
  );
}

export default App;
