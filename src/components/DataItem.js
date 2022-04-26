import './DataItem.css'

function DataItem (props){
    return (
        <div className="user">
            <p>Name:{props.name}</p>
            <p>Surname:{props.surname}</p>
            <p>Age:{props.age}</p>
        </div>
    )
}

export default DataItem