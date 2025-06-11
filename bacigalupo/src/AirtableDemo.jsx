import { useState, useEffect } from 'react';
import { fetchRecords, createRecord } from './api/airtable';

export default function AirtableDemo() {
  const [records, setRecords] = useState([]);
  const [model, setModel] = useState('');

  useEffect(() => {
    fetchRecords().then(setRecords);
  }, []);

  const handleAdd = async () => {
    if (!model) return;
    const newRecord = await createRecord({ Model: model });
    setRecords((prev) => [...prev, newRecord]);
    setModel('');
  };

  return (
    <div>
      <h2>Autos Bacigalupo</h2>
      <input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Modelo"
      />
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {records.map((rec) => (
          <li key={rec.id}>{rec.fields?.Model}</li>
        ))}
      </ul>
    </div>
  );
}
