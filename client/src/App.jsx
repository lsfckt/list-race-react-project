import { Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import TopArea from "./components/TopArea";
import Explore from './components/Explore';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Register from './components/Register';

function App() {

    return (
        <>
            <Header />
            <TopArea />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/howitworks' element={<HowItWorks />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />

                <Route path='/register' element={<Register />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
