import phoneImage from '../images/phone.png';
import css from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <img src={phoneImage} className={css.homePageImage} alt="phonebook" />
      <p className={css.homePageTitle}>PHONEBOOK</p>
    </div>
  );
};
