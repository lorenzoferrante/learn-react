"use client";

import { UUID } from "crypto";
import React, { useEffect, useState } from "react";

type Race = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: {
      lat: string;
      long: string;
      locality: string;
      country: string;
    };
  };
  date: string;
  time: string;
};

const F1RacesList: React.FC = () => {
  const [races, setRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRaces = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.jolpi.ca/ergast/f1/2025/races/");
        if (!res.ok) throw new Error("Failed to fetch races");
        const data = await res.json();
        setRaces(data.MRData.RaceTable.Races);
        console.log(data.MRData.RaceTable.Races);
      } catch {
        setError("Could not load race data.");
      } finally {
        setLoading(false);
      }
    };
    fetchRaces();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>

  const getSortedRaces = (races: Race[]) => {
    return races.sort((a, b) => {
      return Number(a.round) - Number(b.round);
    });
  };

  return (
    <>
      <h1>2025 Formula 1 Races</h1>
      <ul>
        {getSortedRaces(races).map((race) => {
          return <li key={race.round}>
            {race.Circuit.circuitName}
            {"\n"}
            <span>{race.date}</span>
          </li>;
        })}
      </ul>
    </>
  );
};

export default F1RacesList;
