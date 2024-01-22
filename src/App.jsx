import './App.css';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Partials/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
         {/* <Route path="/signup" element={<Signup />} /> */}

        {/* contact page */}

        {/* signup page */}

        {/* login  page */}

        {/* pricing page */}

        {/* about page */}

        {/* courses page */}

        {/* course open page */}

        {/* home page */}
        <Route index path="/" element={<HomePage />} />
      </Routes> 
      <Footer /> 
    </div>
  );
}

export default App;
