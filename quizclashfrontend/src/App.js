import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Quizzes from './pages/Quizzes';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
