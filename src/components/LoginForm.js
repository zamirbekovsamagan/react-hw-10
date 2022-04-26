import { useState } from 'react'
import './LoginForm.css'

function LoginForm (props){
    const [name, setName] = useState(props.name)
    function changeNameHandler(event){
        setName(event.target.value)
    }
    const [obj, setObj] = useState(props.obj)
    function changeObjHandler (event){
        setObj({surname:event.target.value})
    }
    const [age,setAge] = useState(props.age)
    function changeArrayHandler (event){
        setAge(event.target.value)
    }

    function submitHandler (event){
        event.preventDefault()
        const data = {
                name:name,
                obj:obj,
                age:age,
            }
        props.onSaveDataWithId(data)
    }
    
    return (
        <div>
            <form  onSubmit={submitHandler}>
            <h2>Login Form</h2>
            <input type="text" onChange={changeNameHandler} placeholder='name'/>
            <input type="text" onChange={changeObjHandler} placeholder='surname'/>
            <input type="number" onChange={changeArrayHandler} placeholder='age'/>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm