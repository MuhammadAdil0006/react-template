import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { routes } from '@/common';
import { selectCurrentUser } from '@/redux/reducers/authSlice.ts';

const RequireAuth = () => {
  const user = useSelector(selectCurrentUser);

  return (
    user ? <Outlet /> : <Navigate to={routes.LOGIN} replace />
  );
};
export default RequireAuth;
