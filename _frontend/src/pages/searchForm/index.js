import React, { useState } from 'react';
import api from '../../services/api';

export default function SearchForm({ history }) {
  const [words, setWords] = useState('');

  async function whenSubmit(event) {
    event.preventDefault();
    if (document.getElementById('words').value === ""){
      document.getElementById('words').placeholder="Please, first fill the field before submit some data.";
      document.getElementById('words').style="border-color:#f05a5b;";
      return;
    }
    document.getElementById('words').style="border-color:#ddd;";
    document.getElementById('btn').disabled=true;
    document.getElementById('btn').style=
      "background:#afafaf; cursor:progress;";
    document.getElementById('btn').innerText='Loading...';

    const response = await api.post('/sessions', {
      words
    });

    localStorage.setItem('data', JSON.stringify(response.data));

    history.push('/dashboard');
  }

  return (
    <>
      <p>
        Search by <strong>terms</strong> to find AI <strong>interpretations</strong> from IBM Watson based on its Wikipedia comprehension
        </p>
      <form onSubmit={whenSubmit}>
        <label htmlFor="words">Words *</label>
        <input
          type="words"
          id="words"
          placeholder="Please fill with some word like Sun, Google or Turing"
          value={words}
          onChange={event => setWords(event.target.value)}
        />

        <button className="btn" id="btn">Find</button>

      </form>
    </>
  );
}