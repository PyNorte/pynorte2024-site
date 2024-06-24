"use client"

import ActivityPerDay from './activityPerDay';
import { Schedule } from './typeSession'
import { useState } from "react";

interface ToggleSectionProps {
  dataSession: Schedule[]
}

export default function ToggleSection({dataSession}: ToggleSectionProps){
  const [selectedButton, setSelectedButton] = useState("28");
  
  const daySelected = "bg-sunset-900 button-2 p-3 rounded-xl";
  const dayNotSelected = "p-3 pr-4 text-sunset-900 font-semibold";

  const day27 = "Sexta-feira, 27 de setembro";
  const day28 = "Sexta-feira, 28 de setembro";

  function handleData(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const buttonId = e.currentTarget.id;

    if (buttonId === "27") {
      setSelectedButton("27");
    } else if (buttonId === "28") {
      setSelectedButton("28");
    }

  }

  const filteredSessions = dataSession
    .filter(data => data.id_schedule === `${selectedButton}092024`)
    .flatMap(data => data.sessions);

  return (
    <section >
      <section className="flex h-12 w-72 items-center gap-4 whitespace-nowrap rounded-2xl bg-yellow-500 px-1 py-6 text-xs">
      <button
        id="27"
        onClick={handleData}
        className={selectedButton === "27" ? daySelected : dayNotSelected}
      >
        {selectedButton === "27" ? day27 : "Seção 1"}
      </button>
      <button
        id="28"
        onClick={handleData}
        className={selectedButton === "28" ? daySelected : dayNotSelected}
      >
        {selectedButton === "28" ? day28 : "Seção 2"}
      </button>
      </section>
      <ActivityPerDay daySession={filteredSessions}/>
    </section>
  );
};

