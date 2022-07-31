import React, { useState } from 'react';
import InputForm from "./components/InputForm";
import Table from "./components/Table";

function App() {
  const [form, setForm] = useState({
    date: '',
    distance: ''
  });
  const [table, setTable] = useState([]);

  function submit(evt) {
    evt.preventDefault();

    if (form.date === '' || form.distance === '' || form.distance <= 0) {
      return;
    } else {
      const date = prepareDate(form.date);

      if (table.find(item => item.date === date)) {
        setTable(prevTable => prevTable.map(item => item.date === date ? { date: date, distance: +item.distance + +form.distance } : item));
      } else {
        const addForm = {
          date: date,
          distance: form.distance
        }

        setTable(prevTable => [...prevTable, addForm]);
        setTable(table => table.sort((a, b) => new Date(prepareDate(b.date)) - new Date(prepareDate(a.date))));
      }
    }
  }

  function handleChange({ target }) {
    if (target.name === 'date') {
      setForm({
        date: target.value,
        distance: form.distance
      });
    }

    if (target.name === 'distance') {
      setForm({
        date: form.date,
        distance: target.value
      });
    }
  }

  function handleDelete(evt) {
    const date = evt.target.closest('.table__result-wrapper').querySelector('.table__result-date').textContent;

    setTable(prevTable => prevTable.filter(o => o.date !== date));
  }

  function prepareDate(date) {
    if (date.includes('-')) {
      const dateArray = date.split('-');

      return `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;
    }

    if (date.includes('.')) {
      const dateArray = date.split('.');

      return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
    }
  }

  return (
    <div className='fullPage'>
      <div className='wrapper'>
        <InputForm submit={submit} change={handleChange} formDate={form.date} formDistance={form.distance} />
        <Table table={table} deleteRow={handleDelete} />
      </div>
    </div>
  );
}

export default App;
