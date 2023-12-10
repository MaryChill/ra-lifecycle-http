import { useEffect, useState } from 'react';
import NoteModel from './NoteModel';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import CardsAddForm from './CardsAddForm';
import CardsList from './CardsList';



export default function Crud(props) {
    const [form, setForm] = useState({
        content: '',
    })
    const [notes, setNotes] = useState([]);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        const note = new NoteModel(uuidv4(), form.content);
        setNotes(prevNotes => [...prevNotes, note])
        postData('http://localhost:7777/notes', {
            'id': 0,
            "content": note.content
        })
        setForm({
            content: ""
        })
    }

    const handleRemove = id => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
        deleteData(`http://localhost:7777/notes/${id}`)
    }

    const update = () => {
        loadData('http://localhost:7777/notes')
    }

    const loadData = (url = '') => {
        fetch(url)
            .then(response => response.json())
            .then(data => setNotes(prevNotes => prevNotes = data))
    }

    const postData = (url = '', data = {}) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(data => data.json())
    }

    const deleteData = (url = '') => {
        fetch(url, {
            method: 'DELETE',
        }).then(data => data.json());
    }

    useEffect(() => {
        loadData(`http://localhost:7777/notes`)
    }, [notes])

    return (
        <div>
            <Header update={update} />
            <CardsList notes={notes} handleRemove={handleRemove} />
            <CardsAddForm handleChange={handleChange} handleSubmit={handleSubmit} form={form} />
        </div>
    )
}