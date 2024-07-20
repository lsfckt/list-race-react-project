import { Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TopArea from "./components/TopArea/TopArea";
import Explore from './components/Explore/Explore';
import Reviews from './components/Reviews/Reviews';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

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
                <Route path='/login' element={<Login />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
