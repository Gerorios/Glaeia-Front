import React ,{Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Common/Navbar.jsx'; 
import Footer from "./Components/Common/Footer.jsx";
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = lazy(() => import('./components/Home.jsx'));
const LocalesPage = lazy(() => import('./Components/Locales/LocalesPage.jsx'));
const AdminPanel = lazy(() => import('./Components/Admin/AdminPanel.jsx'));


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow font-sans text-gray-800">
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<LocalesPage />} />
              <Route path="/admins" element={<AdminPanel />} />
            </Routes>
          </Suspense>
        </div>
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
