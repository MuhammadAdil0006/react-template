import {routes} from '@/common';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/pages/login/Login';

import RequireAuth from './components/features/requireAuth/RequireAuth';
import './App.css'
import DataMapperDashboard from './pages/data_mapper_dashbaord/DataMapperDashboard';


function App() {

  return (
    <Routes>
      <Route path={routes.LOGIN} element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path={routes.DATA_MAPPER_DASHBAORD} element={<DataMapperDashboard />}></Route>
      </Route>
      <Route path='*' element={<Navigate to={routes.LOGIN} replace />} />
    </Routes>
  )
}

export default App;
