import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation.js/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import css from './AppContainer.module.css';

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
