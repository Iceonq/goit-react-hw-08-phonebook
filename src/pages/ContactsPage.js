import { ContactsList } from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/Form/Form';
import { fetchContacts } from 'redux/operations';
import { getError } from 'redux/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Form />
      <ContactsList />
      {error && <h4>{error}</h4>}
    </div>
  );
};
