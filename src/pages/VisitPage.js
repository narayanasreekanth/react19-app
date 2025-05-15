// src/pages/VisitPage.js
import React, { useEffect, useState } from 'react';
import { getAllVisits } from '../services/visitService';
function VisitPage() {
  const [visits, setVisits] = useState([]);
  useEffect(() => { getAllVisits().then(res => setVisits(res.data)); }, []);
  return (
    <div>
      <h2>Visits</h2>
      <ul>{visits.map(v => <li key={v.id}>{v.storeId}</li>)}</ul>
    </div>
  );
}
export default VisitPage;