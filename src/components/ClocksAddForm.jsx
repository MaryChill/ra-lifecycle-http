
export default function ClocksAddForm({ handleSubmit, handleChangeName, handleChangeZone, form }) {


    return (
        <form className='formInput' onSubmit={handleSubmit}>
            <div className='input'>
                <label htmlFor='name' className='labelFormInput'>Название
                    <input id='name' name='name' className='inputName' value={form.name} maxLength='100' onChange={handleChangeName} required />
                </label>
                <label htmlFor='timeZone'>Временная зона
                    <input type='number' id='timeZone' name='timeZone' className='inputTimeZone' value={form.timeZone} onChange={handleChangeZone} required />
                </label>
                <button className='button'>Добавить</button>
            </div>
        </form>
    )
}