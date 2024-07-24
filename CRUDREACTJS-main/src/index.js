import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/home/Home';
import Admin from './components/admin/Admin'
import ManageUser from './components/admin/Content/ManageUser';
import { UsersProvider } from './context/usersContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home />} />
          </Route>
          <Route path="/admins" element={<Admin />} >
            <Route path='manage-users' element={<ManageUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  </React.StrictMode>
);

