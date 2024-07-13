import { createClient } from "@/utils/supabase/server";

interface Note {
  id: number,
  title: string
}

async function ServerFetch() {
  const supabase = createClient()
  const { data: notes } = await supabase.from("notes").select();  

  return (
    <div>
      <h2>Server fetch</h2>
      <ul>
        {notes && notes.length > 0
          ? notes.map((note) => <li key={note.id}>{note.id} - {note.title}</li>)
          : null}
      </ul>
    </div>
  )
}

export default ServerFetch