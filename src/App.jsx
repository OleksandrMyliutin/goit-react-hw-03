// import './App.css'

import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

function App() {
  const data = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const [todos, setTodos] = useState(data);
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const filteredTodos = todos.filter((contact) => 
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <>
      <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox inputValue={inputValue} handleChange={handleChange}/>
      <ContactList contacts = {filteredTodos} filtered = {filteredTodos}  handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
