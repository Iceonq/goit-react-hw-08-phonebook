import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

export default App;

// const dispatch = useDispatch();
// const isLoading = useSelector(getIsLoading);
// const error = useSelector(getError);

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);

// return (
//   <div>
//     <Form />
//     <ContactsList />
//     {isLoading && !error && <h4>Loading...</h4>}
//     {error && <h4>{error}</h4>}
//   </div>
// );
