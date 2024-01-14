import './App.css';
import { Route, Routes } from 'react-router-dom';
import routingData from './data/routingData';
import { Suspense } from 'react';
import { ToastContainer } from "react-toastify";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:8000/";

  return (
    <div className="App">

      <Suspense
        fallback={
          <div className='position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
            <div className="spinner-border text-dark fs-2" style={{ height: '5rem', width: '5rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >

        <ToastContainer limit={1} />

        <Routes>
          {Object.keys(routingData).map((key) => {
            return <Route key={key} path={key} element={routingData[key]} />;
          })}
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
