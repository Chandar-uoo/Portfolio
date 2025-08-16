
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from"./NavBar";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
    return (
     <>
        <Router>
            {/* Navbar for navigation */}
            <NavBar/>

            {/* Define Routes for each section */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
               
            </Routes>
            
        </Router>
     </>
    );
};

export default App;


