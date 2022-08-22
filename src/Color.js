import React, { useState } from 'react'

const Color = ({getColor}) => {
  const [colorCode, setColorCode] = useState("")

  const handleSubmit = (e) =>{
    	e.preventDefault()
    setColorCode("")
    }

  const handleChange = (e) =>{
      const element = e.target
      setColorCode(element.value)
      getColor(element.value)
  
  }
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input type="text" 
      className='form-input' 
      style={{borderColor : `${colorCode ? colorCode : null}`}}
      name='colorCode' 
      value={colorCode}
      placeholder="Enter Color Name"
      onChange={handleChange}/>
    </form>
  )
}

export default Color