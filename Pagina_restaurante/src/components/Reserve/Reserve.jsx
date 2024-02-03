import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reserve = () => {
  return (
    <>
      <form>
        <input placeholder='name' type='text' name='name'/>
        <input placeholder='email' type='email' name='email'/>
        <input placeholder='reserve date' type='date' name='reserveDate'/>
        <input placeholder='number of days' type='number' name='numberOfDays'/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Reserve