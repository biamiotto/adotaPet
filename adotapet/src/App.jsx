import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Pets from './pages/Pets';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/pets" element={<Pets />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
