import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reserve = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    reserveDate: ''
  })
  // const [btnDisabled, setBtnDisabled] = useState(true)
  let navigate = useNavigate()

  const handleInputChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('reserve', JSON.stringify({
      name: data.name,
      email: data.email,
      reserveDate: data.reserveDate
    }))
    console.log({message: `data stored successfully: `}, {name: data.name,
     email: data.email, reserveDate: data.reserveDate})
    // setTimeout(() => {navigate('/')}, 1000)
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input placeholder='name' type='text' name='name' value={data.name} onChange={handleInputChange}/>
        <input placeholder='email' type='email' name='email' value={data.email} onChange={handleInputChange}/>
        <input placeholder='reserve date' type='date' name='reserveDate' value={data.reserveDate} onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Reserve