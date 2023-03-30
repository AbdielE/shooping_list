import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container text-center">
      <div className='row'>
        <div className='col'></div>
          <h1>Shopping List</h1>
          <hr/>
      </div>
      <div className='row'>
        <div className='col'>C</div>
        <div className='col-8'>Nombre Item</div>
        <div className='col-3'>Botones</div>
      </div>
      <div className='row'>
        <div className='col'>C</div>
        <div className='col-8'>Nombre Item</div>
        <div className='col-3'>Botones</div>
      </div>
      <div className='row'>
        <div className='col'>C</div>
        <div className='col-8'>Nombre Item</div>
        <div className='col-3'>Botones</div>
      </div>
    </div>
  )
}

export default App
