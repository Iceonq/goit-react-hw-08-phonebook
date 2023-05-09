import { ContactsList } from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Router } from 'react-router-dom';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = getIsLoading;
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Form />
      <ContactsList />
      {isLoading && !error && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
    </div>
  );
};
