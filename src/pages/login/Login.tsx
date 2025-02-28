import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '@/apis/authApi.ts';
import { routes, utils } from '@/common';
import { selectAccessToken } from '@/redux/reducers/authSlice.ts';

export default function Login() {
  const token = useSelector(selectAccessToken);
  const location = useLocation();
  const [backendError, setBackendError] = useState('');
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password }).unwrap();
      navigate(routes.DATA_MAPPER_DASHBAORD);
    } catch (error: any) {
      setBackendError(utils.getErrorString(error));
    }
  };

  return (
    token ? <Navigate to={routes.DATA_MAPPER_DASHBAORD} state={{ from: location }} replace /> :
      <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
        <h1>Login</h1>
        {backendError && <p style={{ color: 'red' }}>{backendError}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
  );
}
