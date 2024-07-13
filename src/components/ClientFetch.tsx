"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

interface Note {
  id: number;
  title: string;
}

function ClientFetch() {
  const [notes, setNotes] = useState<Note[]>([]);
  const supabase = createClient();

  const handleClick = async () => {
    try {
      const { data: notes } = await supabase.from("notes").select();
      setNotes(notes as Note[]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Client fetch</h2>
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={handleClick}
      >
        Fetch
      </button>
      <ul>
        {notes && notes.length > 0
          ? notes.map((note) => (
              <li key={note.id}>
                {note.id} - {note.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ClientFetch;
