import React, { useState } from 'react';
import Input from './input';
import Navbar from './navbar';
import Notes from './notes';

const Notepad = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleInput = (input) => {
    setInput(input);
  }

  const handleTitle = (title) => {
    setTitle(title);
  }

  const handleSubmit = () => {
    if ((input.trim() && title.trim()) === '') {
      alert('Input Values...')
    } else {
      const lastIndex = notes.length - 1;
      var id = notes.length === 0 ? 1 : notes[lastIndex].id + 1;
      const newNote = {
        id,
        title: title === '' ? input : title,
        note: input
      }
      setNotes([...notes, newNote]);
      console.log('Notes', notes);
      setInput('');
      setTitle('');
      setFiltered([...filtered, newNote]);
    }
    console.log(notes.length);
  }
  
  const handleFilter = (searchValue) => {
    setSearch(searchValue);
    console.log('serach', search);
    setFiltered(notes);
    if(searchValue === ''){
      setFiltered(notes);
    } else {
      const filteredNotes = notes.filter(note=>{
        return(
          note.title.toLowerCase().includes(searchValue.toLowerCase())||
          Number(searchValue) === note.id
        );
      });
      setFiltered(filteredNotes);
      console.log({'Filtered Notes': filteredNotes});
      console.log({'notes': notes});
    }
  }

  const handleDelete = (id) => {
    const newNote = filtered.filter(note => note.id !== id);
    setNotes(newNote);
    setFiltered(newNote);
  }

  return(
    <div className="main">
      <div className='body'>
      <Navbar 
        handleFilter={handleFilter}
      />
      <div className='mt-5 p-5'>
      <Input
        input={input}
        title={title}
        handleTitle={handleTitle}
        handleInput={handleInput} 
        handleSubmit={handleSubmit}
      />
      {
        filtered.map(note=>
          <Notes 
            key={note.id} 
            note={note}
            handleDelete={handleDelete}
          />
        )
      }
    </div>
    </div>
    </div>
    
    
  );
}

export default Notepad;