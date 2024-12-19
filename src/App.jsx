import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskContextProvider } from './context/TaskContext';
import Navbar from './components/Navbar';
import Login from './components/login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="App">
            <TaskContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </TaskContextProvider>
        </div>
    );
}

export default App;

