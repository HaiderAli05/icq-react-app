// importing required packages and components
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Dashboard from './Dashboard/Dashboard';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';



// define App and use required components in it
const App = () => {
  return (
    <BrowserRouter>
      <div className="pageWrapper">
        <Header />
        <main className='pageContent bg-light py-5'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



// exporting App component as default
export default App;
