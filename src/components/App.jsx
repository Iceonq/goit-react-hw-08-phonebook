import './App.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';
import css from './App.module.css';
import { refeshUser } from 'redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refeshUser());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
