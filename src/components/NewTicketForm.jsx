import React from 'react'
import Image from './Image'

function NewTicketForm(){
  return (
    <div>
      <Image/>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  )
}

export default NewTicketForm
