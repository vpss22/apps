import { useEffect, useState } from "react";

export default function Dashboard() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/scan")
      .then((res) => res.json())
      .then(setLeads);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      {leads.map((lead, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3>{lead.name}</h3>
          <p>Score: {lead.score.score}</p>
          <p>Tier: {lead.score.tier}</p>
        </div>
      ))}
    </div>
  );
}