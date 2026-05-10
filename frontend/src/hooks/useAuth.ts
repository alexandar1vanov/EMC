import { useContext } from 'react';
import AuthContext, { type AuthContextType } from '../contexts/authContext';

const useAuth = () => useContext<AuthContextType>(AuthContext);

export default useAuth;
