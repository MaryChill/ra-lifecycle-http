
import Clock from './Clock';



export default function ClocksList({ watches, handleRemove }) {


    return (
        <div className='display'>
            <ul className='displayData'>
                {watches.map(watch => {
                    return (
                        <li className='name' key={watch.id} >
                            <div className='watchesHeader'>
                                <div>{watch.name} </div>
                            </div>
                            <button className='remove' onClick={() => handleRemove(watch.id)}>✘</button>
                            <div className='time'>
                                <Clock offset={watch.offset} />
                            </div>
                        </li>)
                })}
            </ul>
        </div>
    )
}