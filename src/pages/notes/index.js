// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default () => {
  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `This is my note ${i}`}))

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div sx={{width: '33%', p: 2}}>
             <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <div sx={{variant: 'containers.card', textDecoration: 'none', cursor: 'pointer'}}>
                <strong>{note.title}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}