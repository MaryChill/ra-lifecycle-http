export default function Header({update}) {
    return (
        <div className="titleApp">
            <h1 style={{fontWeight: 'normal'}}>Notes</h1>
            <button className="updateButton" type='submit' onClick={update}>
            </button>
        </div>
    )
}