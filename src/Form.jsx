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
                    onChange={(e) => setUsername(e.target.value)}
                    type='username'
                    value='username'
                />
                <label htmlFor="email">Email: </label>
                <input type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    value='email'
                />
                <label htmlFor="password">Passowrd: </label>
                <input type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    value='password'
                />
                <button>Submit form</button>
            </form>
        </>
    )
}


export default Form; 