// src/components/DrugList.js
import React, { useEffect, useState } from 'react';
import { getDrugs } from '../services/inventoryService';

function DrugList() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    getDrugs().then(res => setDrugs(res.data));
  }, []);

  return (
    <div>
      <h2>Drug Inventory</h2>
      <ul>
        {drugs.map(drug => (
          <li key={drug.id}>{drug.name} - {drug.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default DrugList;