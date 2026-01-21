import {useState} from 'react'

const Form = () => {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

const signUp = async (event) => {
    event.preventDefault() 

const signUpUrl = 'http://localhost:8000/signup'

    try {
        const response = await fetch(signUpUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({username, email, password})
        })
    if(!response.ok) {
        console.error('there was no response')
    }
        const result = await response.json()
        console.log(result)
    } catch(err) {
        console.log('Error Fetching', err)
    }
}


    return (
        <div>
            <h1>Form Page</h1>
            <div className='form-container'>
                <form className='form' onSubmit={signUp} >

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
        </div>
    )
}


export default Form; 