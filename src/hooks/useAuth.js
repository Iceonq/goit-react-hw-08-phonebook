import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from 'redux/auth/selectors';
import { getError } from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const error = useSelector(getError);

  return {
    isLoggedIn,
    user,
    error,
  };
};
