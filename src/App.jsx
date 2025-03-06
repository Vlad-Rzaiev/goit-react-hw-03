import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (savedContacts !== null) {
      return parsedContacts;
    }

    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [contactsFilter, setContactsFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <Section>
      <Container>
        <h1 className={styles.title}>Phonebook</h1>

        <ContactForm onAdd={addContact} />

        <SearchBox value={contactsFilter} onSearch={setContactsFilter} />

        <ContactList contacts={filterContacts} onDelete={deleteContact} />

        {contacts.length === 0 && (
          <p className={styles.noContacts}>No contacts!</p>
        )}
      </Container>
    </Section>
  );
}

export default App;
