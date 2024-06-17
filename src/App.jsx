import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Notes from './components/Notes';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Welcome to the Bare-Bones App</h1>
      <p className="mt-4">This is a minimalistic application structure that you can modify and build upon.</p>
    </div>
  );
}

function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">About</h1>
      <p className="mt-4">This page contains information about the Bare-Bones App.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;