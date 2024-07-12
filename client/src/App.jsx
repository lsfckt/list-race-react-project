import { Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import TopArea from "./components/TopArea";

function App() {

    return (
        <>
            <Header />
            <TopArea />
            
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/howitworks' element={<HowItWorks />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
