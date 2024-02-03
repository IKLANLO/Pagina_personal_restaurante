import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.styles.scss'

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: ''
  })
  const [message, setMessage] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  let navigate = useNavigate()

  const handleInputChange = (event) => {
    if (data.name.length < 3) {
      setMessage('Name must be at least four characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('user', JSON.stringify({
      name: data.name,
      email: data.email
    })) 
    console.log({message: `data stored successfully: `}, {name: data.name}, {email: data.email})
    setTimeout(() => { navigate('/') }, 1000)
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input placeholder='name' type="text" onChange={handleInputChange} name='name' value={data.name}/>
        <input placeholder='email' type="email" onChange={handleInputChange} name='email' value={data.email}/>
        <button type='submit' disabled={btnDisabled}>Submit</button>
        <p>{message}</p>
      </form>
    </>
  )
}

export default Contact