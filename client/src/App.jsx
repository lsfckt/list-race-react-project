import { useState } from 'react';
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
import RegisterBusiness from './components/RegisterBusiness/RegisterBusiness';
import { AuthContext } from './contexts/AuthContext';

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    }

    return (
        <AuthContext.Provider value={contextData}>
            <Header />
            <TopArea />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/howitworks' element={<HowItWorks />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register/business' element={<RegisterBusiness />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
