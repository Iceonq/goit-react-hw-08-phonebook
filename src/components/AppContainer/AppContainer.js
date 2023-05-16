import { Navigation } from 'components/Navigation.js/Navigation';
import { useAuth } from 'hooks/useAuth';

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <div>Yes</div> : <div>No</div>}
    </header>
  );
};
