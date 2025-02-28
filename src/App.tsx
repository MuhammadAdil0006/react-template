import {routes} from '@/common';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/pages/login/Login';

import RequireAuth from './components/features/requireAuth/RequireAuth';
import './App.css'


function App() {

  return (
    <Routes>
      <Route path={routes.LOGIN} element={<Login />} />
      <Route element={<RequireAuth />}>
        {/* {protected routes} */}
      </Route>
      <Route path='*' element={<Navigate to={routes.LOGIN} replace />} />
    </Routes>
  )
}

export default App;
