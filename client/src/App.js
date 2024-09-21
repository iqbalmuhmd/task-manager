import React, { useState } from 'react'

const App = () => {
  const [state, setState] = useState('click me for watch your name')
  function click(){
    setState('hiba fathima')  
  }
  return (
    <div>
      <button onClick={click}>{state}</button>
    </div>
  )
}

export default App
