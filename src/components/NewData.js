import DataItem from './DataItem'
import './NewData.css'
import LoginForm from './LoginForm'

function NewData(props){
    function saveDataWithId(data){
        if(data.surname !== undefined || data.name !== undefined || data.age!==undefined){
            const dataWithId = {
                ...data,
                id:Math.random().toString()
            }
            props.onSaveData(dataWithId)
        }
    }
    return (
        <div className='item'>
            <LoginForm onSaveDataWithId={saveDataWithId}/>
            {props.datalist.map(element=>{
                return <DataItem key={element.id} name={element.name} surname={element.obj.surname} age={element.age}/>
            })}
        </div>
    )
}

export default NewData