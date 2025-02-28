import { routes } from '@/common';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '@/redux/reducers/authSlice.ts';

export default function DataMapperDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logOut());
        navigate(routes.LOGIN);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Data Mapper Dashboard</h1>
            <button onClick={handleLogout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Logout
            </button>
        </div>
    );
}
