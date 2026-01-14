import {useState} from 'react'



const Form = () => {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

const signUp = async (event) => {
    event.preventDefault() 
    console.log(username, email, password)
}


    return (
        <div>
            <h1>Form Page</h1>
            <form className='form-container' onSubmit={signUp} >
                <label htmlFor="username">
                Username:
                    <input 
                        onChange={(e) => setUsername(e.target.value)}
                        type='text'
                        id='username'
                    />
                 </label>

                <label htmlFor="email">
                Email: 
                    <input  
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        id='email'
                    />
                </label>

                <label htmlFor="password">
                Passowrd: 
                    <input  
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        id='password'
                    />
                </label>
                <button className='submit-bttn' type='submit'  >Submit form</button>
            </form>
        </div>
    )
}


export default Form; 