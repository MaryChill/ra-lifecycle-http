import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import WatchesModel from './WatchesModel';
import ClocksAddForm from './ClocksAddForm';
import ClocksList from './ClocksList';



export default function Watches(props) {
    const [form, setForm] = useState({
        name: '',
        timeZone: '',
    });

    const [watches, setWatches] = useState([]);
    const [offset, setOffset] = useState(0)

    const handleChangeName = evt => {
        const { name, value } = evt.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const handleChangeZone = evt => {
        const { name, value } = evt.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
        setOffset(value * -60)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const watch = new WatchesModel(uuidv4(), form.name, form.timeZone, offset);
        setWatches(prevWatches => [...prevWatches, watch])
        setForm({
            name: '',
            timeZone: '',
        })
    }

    const handleRemove = id => {
        setWatches(prevWatches => prevWatches.filter(watch => watch.id !== id));
    }

    return (
        <div>
            <ClocksAddForm
                handleSubmit={handleSubmit}
                handleChangeName={handleChangeName}
                handleChangeZone={handleChangeZone}
                form={form}
            />
            <ClocksList
                watches={watches}
                handleRemove={handleRemove} />
        </div>
    )
}