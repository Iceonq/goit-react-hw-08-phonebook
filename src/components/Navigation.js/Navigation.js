import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/tasks">Tasks</NavLink>}
      <NavLink to="/login">Login</NavLink>
      {isLoggedIn && <NavLink to="/tasks">Tasks</NavLink>}
      <NavLink to="/register">Register</NavLink>
      {isLoggedIn && <NavLink to="/tasks">Tasks</NavLink>}
    </nav>
  );
};
