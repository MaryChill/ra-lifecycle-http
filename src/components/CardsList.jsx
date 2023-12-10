import Card from './Card'

export default function CardsList({ notes, handleRemove}) {

    return (
            <ul className='displayData'>
                {notes.map(note => {
                    return (
                        <li className='listItem' name='name' key={note.id} >
                        <button type='submit' className='deleteButton' onClick={() => handleRemove(note.id)} ></button>
                            <Card content={note.content} handleRemove={handleRemove} />
                        </li>
                    )
                })}
            </ul>
    )
}