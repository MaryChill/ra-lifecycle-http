export default function CardsAddForm({handleSubmit, handleChange, form}) {
    
    return (
        <form className='newNotes' onSubmit={handleSubmit}>
            <label htmlFor='newNote' style={{
                fontWeight: 'bold',
                fontSize: 14
            }}>New Note</label>
            <div className='container'>
                <textarea id='content' value={form.content} name='content' onChange={handleChange}
                    style={{
                        resize: 'none',
                        width: 320,
                        height: 50,
                        padding: 5,
                        border: 'none',
                        outline: 'none'
                    }}
                />
                <button type='submit' className='submitNewNote' ></button>
            </div>
        </form>
    )
}