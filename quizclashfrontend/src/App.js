import './App.css';
import { Route, Routes } from 'react-router-dom';
import routingData from './data/routingData';
import privateRoutingData from './data/privateRoutingData';
import { Suspense } from 'react';
import { ToastContainer } from "react-toastify";
import axios from "axios";
import PrivateRoute from './util/PrivateRoute';
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from './util/AdminRoute';
import adminRoutingData from './data/adminRoutingData';
import { getAccessToken } from './util/Authentication';

function App() {

  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:8000/";

  // if auth token available then config 
  axios.interceptors.request.use(
    (config) => {
      const authToken = getAccessToken();

      if (authToken) {
        config.headers.Authorization = `Token ${authToken}`;
      }

      return config;
    },
    (error) => {
      if (axios.isCancel(error)) {
        console.error('Request canceled:', error.message);
      } else if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Request setup error:', error.message);
      }
      return Promise.reject(error);
    }
  );

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

          {/* private  */}
          <Route element={<PrivateRoute />} >

            {Object.keys(privateRoutingData).map((key) => {
              return <Route key={key} path={key} element={privateRoutingData[key]} />;
            })}

          </Route>

          {/* admin */}
          <Route element={<AdminRoute />} >

            {Object.keys(adminRoutingData).map((key) => {
              return <Route key={key} path={key} element={adminRoutingData[key]} />;
            })}

          </Route>
          
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
