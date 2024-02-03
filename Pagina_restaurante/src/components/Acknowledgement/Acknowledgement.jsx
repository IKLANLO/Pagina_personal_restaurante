import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Acknowledgement.styles.scss'

const Acknowledgement = () => {
  const [data, setData] = useState({
    message: ''
  })
  let navigate = useNavigate()

  const handleInputChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }
  

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('acknowledgement', JSON.stringify({
      message: data.message
    }))
    console.log({message: `data stored successfully: `}, {message: data.message})
    setTimeout(() => {navigate('/')}, 1000)
  }

  return (
    <>
      <form className='acknowledgement' onSubmit={handleSubmit}>
        <textarea rows={10} placeholder='agradecimientos o sugerencias' 
          type='text' name='message' value={data.message} onChange={handleInputChange}/>
        <div className='acknowledgement__div-submit'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Acknowledgement