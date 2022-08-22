import React, { useState } from 'react'
import Color from './Color'
const App = () => {
  const [color, setColor ] = useState(null)
  const getColor = (value)=>{
      setColor(value)
  }
 
  return (
    <main>
      <section>
      <div className='color-wrap' style={{ backgroundColor: `${color ? color : null}`, color: `${color === "white" ? "#222" : "#fff"}`, borderColor: `${color ? color : "blue"}` }}>{color}</div>
      <Color getColor={getColor} />
      </section>
    </main>
  )
}

export default App
