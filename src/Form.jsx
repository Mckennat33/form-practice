import {useState} from 'react'



const Form = () => {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <>
            <h1>Form Page</h1>
            <form action="" className='form-container'>
                <label htmlFor="">Username: </label>
                <input type="username" 
                    onChange={}
                    type='username'
                    value='username'
                />
                <label htmlFor="email">Email: </label>
                <input type="email" 
                    onChange={}
                    type='email'
                    value='email'
                />
                <label htmlFor="password">Passowrd: </label>
                <input type="password" 
                    onChange={}
                    type='password'
                    value='password'
                />
                <button>Submit form</button>
            </form>
        </>
    )
}


export default Form; 