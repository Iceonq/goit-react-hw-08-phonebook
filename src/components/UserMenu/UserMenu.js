import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p>{user.email}</p>
      <button>Logout</button>
    </div>
  );
};
